import { Router } from "express";
import { getUsers, register, login } from "../controllers/user.controller";

const router = Router();

router.route("/").get(getUsers);
router.route("/register").post(register);
router.route("/login").post(login);

export default router;
