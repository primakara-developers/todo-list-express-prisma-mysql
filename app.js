import express from "express"
import cors from "cors"
import morgan from "morgan"
import route from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan("dev"))

app.use(route)

app.listen(3000, () => {
    console.log("Server is run")
})