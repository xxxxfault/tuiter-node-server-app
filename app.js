import express from 'express'
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js"
import mongoose from "mongoose";
import dotenv from 'dotenv'

await dotenv.config()


const CONNECTION_STRING = process.env.DB_STRING || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);


const app = express()
app.use(express.json())
app.use(cors())
HelloController(app)
UserController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000);