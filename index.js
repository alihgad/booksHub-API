import express from 'express'
import connectionDB from './src/app/DB/connection.js'
import cors from 'cors'
import bookRouter from './src/app/moduels/book/book.routes.js'
import authorRouter from './src/app/moduels/author/author.routes.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/books',bookRouter)
app.use('/authors',authorRouter)


connectionDB()


app.get('/', (req, res) => res.send('Hello World!'))
app.get('*', (req, res) => res.status(404).json({msg : 'not found'}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))