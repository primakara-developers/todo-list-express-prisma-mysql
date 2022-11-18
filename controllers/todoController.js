import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

class TodoController {
    static async getTodo (req, res) {
        const todoData = await prisma.todo.findMany()
        res.status(200).json(todoData)
    }

    static async addTodo (req, res) {
        const {title, desc} = req.body
        const result = await prisma.todo.create({
            data: {
                title,
                desc
            }
        })
        res.status(201).json(result)
    }
}

export default TodoController