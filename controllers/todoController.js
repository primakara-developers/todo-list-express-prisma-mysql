import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class TodoController {
  static async getTodo(req, res) {
    const todoData = await prisma.todo.findMany();
    res.status(200).json(todoData);
  }

  static async addTodo(req, res) {
    const { title, desc } = req.body;
    const result = await prisma.todo.create({
      data: {
        title,
        desc,
      },
    });
    res.status(201).json(result);
  }

  static async editTodo(req, res) {
    const id = req.params.id;
    const { title, desc } = req.body;
    const result = await prisma.todo.update({
      where: { id: id },
      data: { title, desc },
    });
    res.status(200).json(result);
  }

  static async deleteTodo(req, res) {
    const result = await prisma.todo.delete({ where: { id: req.params.id } });
    res.status(200).json("Data deleted successfully");
  }
}

export default TodoController;
