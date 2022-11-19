import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { decodeHash, generateHash } from "../helper/bcrypt.js";
import { generateToken } from "../helper/jwt.js";

class UserController {
  //   static async getUser(req, res) {
  //     const userData = await prisma.user.findMany();
  //     res.status(200).json(userData);
  //   }

  static async addUser(req, res) {
    const { username, password } = req.body;
    const hashedPassword = generateHash(password);
    const result = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    res.status(201).json(result);
  }

  //   static async deleteUser(req, res) {
  //     const result = await prisma.user.delete({ where: { id: req.params.id } });
  //     res.status(200).json("Data deleted successfully");
  //   }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const findUser = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (findUser) {
        const isPasswordValid = decodeHash(password, findUser.password);
        if (isPasswordValid) {
          const { id, username } = findUser;
          res.status(200).json({
            token: generateToken({ id, username }),
          });
        } else {
          res.status(400).json({ message: "Invalid username or password" });
        }
      } else {
        res.status(400).json({ message: "Invalid username or password" });
      }
    } catch (err) {}
  }
}

export default UserController;
