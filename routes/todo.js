import { Router } from "express";
import TodoController from "../controllers/todoController.js";

const router = Router();

router.get("/todo", TodoController.getTodo);
router.post("/todo", TodoController.addTodo);
router.put("/todo/:id", TodoController.editTodo);
router.delete("/todo/:id", TodoController.deleteTodo);

export default router;
