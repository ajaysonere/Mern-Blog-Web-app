import express from "express";
import { changeAvatar, editUser, getAuthors, getUser, loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register" , registerUser );
userRouter.post("/login" , loginUser);
userRouter.get("/:id" , getUser);
userRouter.post("/change-avatar" , changeAvatar);
userRouter.post("/edit-user" , editUser);
userRouter.get("/authors" , getAuthors);

export default userRouter;