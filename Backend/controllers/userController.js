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

// Send Verify Email
exports.sendVerifyEmail = catchAsyncErrors(async (req, res, next) => {
  const { email, boardId, resend,isUserExist} = req.body;

  console.log(req.body)
  let user;
  if (!resend && !isUserExist) {
    user = await User.create({
      name: email.split("@")[0],
      username: email.split("@")[0],
      email,
      goal: "Organize ideas and work",
    });
  } else {
    user = await User.findOne({ email });
  }

  if(!user){
    return new ErrorHandler("User not found",400)
  }
  const token = user.getJWTToken();

  const message = `
  <div style="width:520px;margin:auto;"><div style="width: 100%;"><div class="adM">
    </div><div style="vertical-align:top;text-align:left;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;/* width: 30%; */"><div class="adM">
        </div><div style="padding-top:30px;padding-bottom:20px;vertical-align:top;text-align:center"><a href="https://www.atlassian.com/software/trello" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.atlassian.com/software/trello&amp;source=gmail&amp;ust=1717766878110000&amp;usg=AOvVaw1EsnkQjy2g-jEwWJoFIsRu"><img src="https://ci3.googleusercontent.com/meips/ADKq_Nad7XNCtSOr10IERUCtm6I547fGFvOORDnBAedDV4OYkvpZ4mmrLVDDg9fp3s11CCjUsOb9UN0WFd1qTDok6xiyJWVxwnbWSQ_hC8_R9IwqwFtlkMNAFb5xUOh_zAmQeP08SgNCUURUb54Cg4psAw=s0-d-e1-ft#https://id-mail-assets.atlassian.com/shared/logo/adg3/product/trello/logo-blue-new-2x.png" height="30" alt="Trello" style="line-height:100%;outline:none;text-decoration:none;border:0" class="CToWUd" data-bit="iit"></a></div>
        <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
        <div>
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                <tbody>
                    <tr>
                        <td align="center"><img src="https://ci3.googleusercontent.com/meips/ADKq_NaqyeiZg4Sw8tgRdwrTcmENLIiDWsw_tWVsOlHzHUevTnGapAKy_3_SrQcBxSiqjZ4Y0IEr2qetYwWaDNIL6ubLCDnBKhLBSwbuWP8eO0xwZLhNilhwS_UFcXxqsK0e8stPVvCSR2F9IFNqfEIXBoR-_uNSlVMq1_HF6TYA=s0-d-e1-ft#https://id-mail-assets.atlassian.com/template/aid_signup_welcome_verify_cobranded_adg/trello-people.png" height="175" border="0" alt="" style="border:0;line-height:100%;outline:none;text-decoration:none" class="CToWUd a6T" data-bit="iit" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 598.538px; top: 271.8px;"><span data-is-tooltip-wrapper="true" class="a5q" jsaction="JIbuQc:.CLIENT"><button class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE" jscontroller="PIVayb" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;" data-idom-class="CgzRE" jsname="hRZeKc" aria-label="Download attachment " data-tooltip-enabled="true" data-tooltip-id="tt-c20" data-tooltip-classes="AZPksf" id="" jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgwMTExODUyMjc0OTcxMjQ0OSJd; 43:WyJpbWFnZS9qcGVnIl0."><span class="OiePBf-zPjgPe VYBDae-JX-UHGRz"></span><span class="bHC-Q" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="VYBDae-JX-ank-Rtc0Jf" jsname="S5tZuc" aria-hidden="true"><span class="bzc-ank" aria-hidden="true"><svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" class=" aoH"><path d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z"></path></svg></span></span><div class="VYBDae-JX-ano"></div></button><div class="ne2Ple-oshW8e-J9" id="tt-c20" role="tooltip" aria-hidden="true">Download</div></span></div>
                            <div dir="ltr" style="opacity:0.01">
                                <span><button aria-label="Download attachment " id="m_5036249371904008769"><span></span><span></span><span aria-hidden="true"><span aria-hidden="true"><u></u>
                                                    <u></u>
                                                    <u></u>
                                                <u></u></span></span>
                                        <div></div>
                                    </button>
                                    <div id="m_5036249371904008769tt-c32" role="tooltip" aria-hidden="true">
                                        Download
                                    </div>
                                </span></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h1 style="margin-bottom:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:24px;font-weight:500;letter-spacing:-0.01em;color:#172b4d;line-height:28px;margin-top:40px">
                You’re nearly there!</h1>
            <p style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                Hi,</p>
            <p style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                To finish setting up your account and start using Trello, confirm we’ve got the correct email
                for you.
            </p>
            <div style="margin-top:28px"><a href="http://localhost:5173/signup/welcome2?token=${token}&source=${boardId}" 
                  style="box-sizing:border-box;border-radius:3px;border-width:0;border:none;display:inline-flex;font-style:normal;font-size:inherit;line-height:24px;margin:0;outline:none;padding:4px 12px;text-align:center;vertical-align:middle;white-space:nowrap;text-decoration:none;background:#0052cc;color:#ffffff" 
                  target="_blank" 
                  data-saferedirecturl="https://www.google.com/url?q=http://localhost:5173/signup/welcome2?token=${token}&source=${boardId}">Verify your email</a></div>
            </div>
        <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
        <h4 style="margin-bottom:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:600;letter-spacing:-0.003em;color:#172b4d;line-height:16px;margin-top:16px">
            Your Atlassian Account</h4>
        <p style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
            Make things easier by using one account across all of your Atlassian products. <a href="https://confluence.atlassian.com/cloud/your-atlassian-account-976161169.html" style="border:none;background:transparent;color:#0052cc;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://confluence.atlassian.com/cloud/your-atlassian-account-976161169.html&amp;source=gmail&amp;ust=1717766878110000&amp;usg=AOvVaw0hJhtVN709neNWPSFGii7I">Learn
                more.</a></p>
        <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
        <div style="color:#707070;font-size:13px;line-height:19px;text-align:center;margin-top:10px">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" align="center" style="border-collapse:collapse">
                <tbody>
                    <tr>
                        <td valign="top" align="center" style="padding-top:10px;line-height:18px;text-align:center;font-weight:none;font-size:12px;color:#505f79">
                            <span>This message was sent to you by Atlassian Cloud</span><br>
                        </td>
                    </tr>
                    <tr valign="top">
                        <td align="center" style="padding-top:15px;padding-bottom:30px">
                            <a href="https://www.atlassian.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.atlassian.com&amp;source=gmail&amp;ust=1717766878110000&amp;usg=AOvVaw0W1sfyIcusEe5TJLzR8KVK"><img src="https://ci3.googleusercontent.com/meips/ADKq_Na6XzjWLy087GFD9hbEVqXoklvXJNS90Id5N9MxbfEi4xqTyfVUuwJG-PPQvOSGaaoV_Hmp8_0sVuzpjjCAg-gS-OyuVLoCZvj9xOIyPeNjBlvbaMKaPJf9qjvRQErEmAZ9QNIYV4u4H0B49K_9zg=s0-d-e1-ft#https://id-mail-assets.atlassian.com/shared/id-summit/id-summit-email_logo_360x80_NEW.png" width="114" border="0" alt="Atlassian" style="border:0;line-height:100%;outline:none;text-decoration:none;display:block;color:#4c9ac9" class="CToWUd" data-bit="iit">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table><div class="yj6qo"></div><div class="adL">
        </div></div><div class="adL">
    </div></div><div class="adL">
</div></div><div class="adL">
</div></div>`

  sendEmail({
    email,
    subject: "Verify your email for Trello",
    message
  })

  res.status(201).json({
    success: true
  })

})

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
    _id: user._id,
    workspace: {
      name: newWorkspace.name,
      members: newWorkspace.members,
      _id: newWorkspace._id,
      boards: [
        {
          boardTitle: newBoard.boardTitle,
          boardVisibility: newBoard.boardVisibility,
          boardMembers: newBoard.boardMembers,
          _id: newBoard._id,
          lists: newLists.map((list, index) => {
            return {
              listTitle: list.listTitle,
              listOrder: list.listOrder,
              _id: list._id,
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
                  _id: card._id
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

  res.status(201).cookie("authtoken", token, options).json({
    success: true,
    newUser,
    token,
  });
});

exports.verifyOtp = catchAsyncErrors(async (req, res, next) => {
  const { otp } = req.body;

  const
    user = await User.findOne({
      otp
    });

  if (!user) {
    return next(new ErrorHandler("Invalid OTP", 400));
  }

  user.otp = undefined;
  await user.save({ validateBeforeSave: false });

  sendToken(user, 200, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;

  // checking if user has given password and email both

  if (!email) {
    return next(new ErrorHandler("Please Enter Email", 400));
  }

  // const user = await User.findOne({ email }).select("+password");
  const user = await User.findOne({ email })

  if (!user) {
    return next(new ErrorHandler("Invalid email", 401));
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  user.otp = otp;
  await user.save({ validateBeforeSave: false });

  const message = `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td align="center" style="padding: 20px; background-color: #007bff; border-radius: 8px 8px 0 0;">
                            <h1 style="margin: 0; color: #ffffff;">Your OTP Code</h1>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 40px 20px;">
                            <p style="font-size: 16px; color: #333333;">Hello,</p>
                            <p style="font-size: 16px; color: #333333;">Use the following OTP code to complete login:</p>
                            <p style="font-size: 24px; color: #007bff; font-weight: bold; margin: 20px 0;">${otp}</p>
                            <p style="font-size: 16px; color: #333333;">This OTP code is valid for 10 minutes.</p>
                            <p style="font-size: 16px; color: #333333;">If you did not request this code, please ignore this email.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px; background-color: #f4f4f4; border-radius: 0 0 8px 8px;">
                            <p style="font-size: 14px; color: #777777;">Thank you,</p>
                            <p style="font-size: 14px; color: #777777;">Trello</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>`
  sendEmail({
    email: user.email,
    subject: "Trello OTP Code",
    message
  });

  res.status(200).json({
    success: true,
  });
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