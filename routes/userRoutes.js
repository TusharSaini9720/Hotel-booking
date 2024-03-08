const express = require("express");
const userController = require("./../controller/userController");
const authController = require("./../controller/authController");
const userRoutes = express.Router();

//for users
userRoutes.post("/signup", authController.signup);
userRoutes.post("/login", authController.login);
userRoutes.get("/logout", authController.logout);
userRoutes.post("/forgotPassword", authController.forgotPassword);
userRoutes.patch("/resetPassword/:token", authController.resetPassword);
userRoutes.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);
userRoutes.patch(
  "/updateData",
  authController.protect,
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  authController.updateData
);
userRoutes.patch(
  "/addHistory",
  authController.protect,
  authController.addHistory
);
userRoutes.delete(
  "/deleteHistory",
  authController.protect,
  authController.deleteHistory
);

userRoutes.delete("/deleteMe", authController.protect, authController.deleteMe);
userRoutes.get(
  "/me",
  authController.protect,
  userController.getMe,
  userController.getUser
);
userRoutes.post("/sendEmail", authController.sendEmail);

//for administration
userRoutes
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    userController.getAllUser
  )
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    userController.createUser
  );
userRoutes
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    userController.getUser
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    userController.updateUser
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    userController.deleteUser
  );

module.exports = userRoutes;
