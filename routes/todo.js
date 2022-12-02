import { Router } from "express";
import TodoController from "../controllers/todoController.js";
import { authentication, authorization } from "../middlewares/auth.js";

const router = Router();

router.use(authentication);
router.get("/todo", TodoController.getTodo);
router.post("/todo", TodoController.addTodo);
router.put("/todo/:id", authorization, TodoController.editTodo);
router.delete("/todo/:id", authorization, TodoController.deleteTodo);

export default router;
