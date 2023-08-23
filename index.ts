import express, { Request, Response } from 'express'
import { join } from 'path'

const app = express()
const path = join(__dirname, '..', 'frontend')

        app.use('/', express.static(path))

        app.all('*', (req: Request, res: Response) => res.sendStatus(404))

        app.listen(8000)
        console.log("http://localhost:8000")
