import { decodeToken } from "../helper/jwt";
import { PrismaClient } from "@prisma/client";
const prisma = PrismaClient();

function authentication(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    req.loggedUser = decodeToken(token);
    next();
  } else {
    res.status(400).json({ message: "Invalid auth" });
  }
}

async function authorization(req, res, next) {
  if (req.loggedUser) {
    const todoID = req.params.id;
    const user = req.loggedUser;

    const findTodo = await prisma.todo.findUnique({
      where: {
        id: todoID,
      },
    });

    const validUserTodo = user.id === findTodo.userID;

    if (validUserTodo) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden access" });
    }
  } else {
    res.status(403).json({ message: "Forbidden access" });
  }
}
export { authentication, authorization };
