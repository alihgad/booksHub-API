import book from "../../../DB/models/book.js"

export default function(req, res, next) {
    let id = req.params.id
    book.findById(id)
    .then((data)=>{data? next(): res.status(404).json({msg:"Book not found"}) })
    .catch((err)=>{console.log(err);})
}