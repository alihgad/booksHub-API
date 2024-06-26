import { Router } from "express";
import { addauthor, getauthors , getauthor ,deleteauthor,updateauthor, getAuthorsPagenation, getAuthorsSearch, getAuthorsPaginationAndSearch } from "./author.controler.js";
import idExisist from "./middelwears/idExisist.js";

let authorRouter = Router()

authorRouter.get('/',getauthors)
authorRouter.get('/pagination/:page',getAuthorsPagenation)
authorRouter.get('/search',getAuthorsSearch)
authorRouter.get('/searchAndPagination/:page',getAuthorsPaginationAndSearch)
authorRouter.get('/:id',idExisist,getauthor)
authorRouter.post('/',addauthor)
authorRouter.delete('/:id',deleteauthor)
authorRouter.put('/:id',updateauthor)





export default authorRouter