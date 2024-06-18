import book from "../../../DB/models/book.js"

export default async function (req, res, next) {
    let booksId = req.body.books
    for (let i = 0; i < booksId.length; i++) {
        let data = await book.findById(booksId[i]).exec()
        if (data == null) {
            console.log(data);
            return res.status(404).json({msg: 'Book not found'})
        }
    }
  
    next()



}