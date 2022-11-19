import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

// router.get("/user", UserController.getUser);
// router.get("/user/:id", UserController.getById);
router.post("/user", UserController.addUser);
// router.delete("/user/:id", UserController.deleteUser);
router.post("/login", UserController.login);

export default router;
