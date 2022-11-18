import {Router} from "express"
import TodoController from "../controllers/todoController.js"

const router = Router()

router.get("/todo", TodoController.getTodo)
router.post("/todo", TodoController.addTodo)

export default router