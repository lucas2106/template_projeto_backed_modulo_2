import Router from "express";
import AuthController from "../controllers/authController";

const authRouter = Router()
const authController = new AuthController()

authRouter.post("/", authController.login)

export default authRouter;
