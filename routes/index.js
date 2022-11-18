import {Router} from "express"
import todoRouter from "./todo.js"

const router = Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Server connected"
    })
})

router.use(todoRouter)

export default router