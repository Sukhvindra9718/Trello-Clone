const crypto = require("crypto");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/userModel");
const Workspace = require('../models/workspaceModel');
const Board = require('../models/boardModel');
const List = require('../models/listModel');
const Card = require('../models/cardModel');


// Verify Email
exports.verifyEmail = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
});

// Register a User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { email, goal, workspace } = req.body;

  const user = await User.create({
    name: email.split("@")[0],
    username: email.split("@")[0],
    email,
    goal,
  });

  const members = workspace.members.filter(member => member !== '');
  
  const newWorkspace = await Workspace.create({
    name: workspace.name,
    type: 'Other',
    description: 'Personal Workspace',
    visibility: 'Private',
    members: [user.email, ...members],
    user: user._id
  });

  const board = workspace.boards[0];
  const newBoard = await Board.create({
    boardTitle: board.name,
    boardVisibility: 'Private',
    boardMembers: [user.email, ...members],
    workspace: newWorkspace._id
  });

  // Create lists and wait for them to resolve
  const listPromises = board.lists.map((list, index) => {
    return List.create({
      listTitle: list,
      listOrder: index,
      board: newBoard._id
    });
  });
  const newLists = await Promise.all(listPromises);
  
  // Create cards and wait for them to resolve
  const cardPromises = board.cards.map((card, index) => {
    return Card.create({
      cardTitle: card,
      cardOrder: index,
      list: newLists[0]._id // Assuming all cards are for the first list, adjust as necessary
    });
  });
  const newCards = await Promise.all(cardPromises);

  const token = user.getJWTToken();

  const newUser = {
    name: user.name,
    username: user.username,
    email: user.email,
    goal: user.goal,
    userId: user._id,
    workspace: {
      name: newWorkspace.name,
      members: newWorkspace.members,
      workspaceId: newWorkspace._id,
      boards: [
        {
          name: newBoard.boardTitle,
          boardVisibility: newBoard.boardVisibility,
          boardMembers: newBoard.boardMembers,
          boardId: newBoard._id,
          lists: newLists.map((list, index) => {
            return {
              listTitle: list.listTitle,
              listOrder: list.listOrder,
              listId: list._id,
              boardId: newBoard._id,
              cards: index === 0 ? newCards.map((card, cardIndex) => {
                return {
                  cardTitle: card.cardTitle,
                  cardOrder: card.cardOrder,
                  cardDescription: '',
                  cardComments: [],
                  cardLabels: [],
                  cardMembers: [],
                  cardDueDates: null,
                  cardAttachments: [],
                  notificationAccess: false,
                  listId: card.list,
                  cardId: card._id
                }
              }) : []
            }
          }),
        }
      ]
    }
  };

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(201).cookie("token", token, options).json({
    success: true,
    newUser,
    token,
  });
});
// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

// Logout User
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // const resetPasswordUrl = `${req.protocol}://${req.get(
  //   "host"
  // )}/password/reset/${resetToken}`;
  const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not password", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

//Get User Details
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});
// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 1000,
      height: 1000,
      Crop: "fill",
    });

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Get all users detail --> Admin
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// update User Role -- Admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    shopName: req.body.shopName,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Delete User --Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  // const imageId = user.avatar.public_id;

  // await cloudinary.v2.uploader.destroy(imageId);

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});