import mongoose from "mongoose";
import book from "./book.js";

const idSchema = new mongoose.Schema({
    _id: mongoose.ObjectId

})


const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: true,
    },
    books: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book',
                default:' '
            }
        ]
    }

});

const author = mongoose.model('author', authorSchema)

export default author;