import { Router } from "express";
import todoRouter from "./todo.js";
import userRouter from "./user.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Server connected",
  });
});

router.use(userRouter);
router.use(todoRouter);

export default router;
