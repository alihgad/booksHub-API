import author from "../../../DB/models/author.js";

export default function(req, res, next) {
    let id = req.params.id
    author.findById(id)
    .then((data)=>{data? next(): res.status(404).json({msg:"authour not found"}) })
    .catch((err)=>{console.log(err);})
    return
}