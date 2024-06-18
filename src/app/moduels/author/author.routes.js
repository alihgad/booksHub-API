import { Router } from "express";
import { addauthor, getauthors , getauthor ,deleteauthor,updateauthor } from "./author.controler.js";
import idExisist from "./middelwears/idExisist.js";

let authorRouter = Router()

authorRouter.get('/',getauthors)
authorRouter.get('/:id',idExisist,getauthor)
authorRouter.post('/',addauthor)
authorRouter.delete('/:id',deleteauthor)
authorRouter.put('/:id',updateauthor)





export default authorRouter