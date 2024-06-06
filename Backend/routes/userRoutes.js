const express = require("express");
const { isAuthenticatedUser, authorizeRoles } =  require("../middleware/auth");
const {verifyEmail,verifyOtp, registerUser, loginUser, logoutUser,getUserDetails,forgotPassword, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, resetPassword, deleteUser, sendVerifyEmail} = require("../controllers/userController");
const router = express.Router();


router.route("/register").post(registerUser);
router.route("/verifyEmail").post(verifyEmail);
router.route('/sendVerifyEmail').post(sendVerifyEmail)
router.route("/verifyOtp").post(verifyOtp);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").post(resetPassword);
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUser,getUserDetails);
router.route("/password/update").put(isAuthenticatedUser,updatePassword);
router.route("/me/update").put(isAuthenticatedUser,updateProfile);
router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUser);
router.route("/users").get(getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;