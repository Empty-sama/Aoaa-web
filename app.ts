import express, { Request, Response } from 'express'
import { join } from 'path'

export class Main {
    constructor(){

        this.app.use('/', express.static(this.path))

        this.app.all('*', (req: Request, res: Response) => res.sendStatus(404))

        this.app.listen(3000, () => console.log('Running at Port http://localhost:3000'))
    }

private app = express()

private path = join(__dirname, '.main')
}
