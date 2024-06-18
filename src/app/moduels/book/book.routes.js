import { Router } from "express";
import { addBook, getBooks , getBook ,deleteBook,updateBook } from "./book.controler.js";
import bookExisist from "./middelwears/bookExisist.js";

let bookRouter = Router()

bookRouter.get('/',getBooks)
bookRouter.get('/:id',bookExisist,getBook)
bookRouter.post('/',addBook)
bookRouter.delete('/:id',bookExisist,deleteBook)
bookRouter.patch('/:id',bookExisist,updateBook)





export default bookRouter