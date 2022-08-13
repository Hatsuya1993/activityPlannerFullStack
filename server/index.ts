import express, {Express} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { locationRoutes } from './Routes/routes'

dotenv.config({
    path: "./config.env"
})

export const app : Express = express()
app.use(express.json())
app.use(cors())
app.use('/', locationRoutes)

const DB = process.env.DATABASE!.replace(
    "<password>",
    process.env.DATABASE_PASSWORD!
)

try {
    mongoose.connect(DB)
} catch (error) {
    console.log(`[DB]: ${error}`)
} finally{
    console.log('[DB]: MongoDB success connect')
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`[Server]: Server is running at https://localhost:${port}`)
})