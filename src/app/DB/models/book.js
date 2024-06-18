import mongoose from "mongoose";




const bookSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true,
        
    }, 
    content: {
        type: String,
        required: true,
       
    },
    author: {
        name:{

            type: String,
            required: true,
        },
        _id:{
            type: mongoose.ObjectId,
            required: true,
            ref: 'author'
        }
       
    },
    date: { type: Date, default: Date.now }

 });

 const book = mongoose.model('Book',bookSchema)


 export default book