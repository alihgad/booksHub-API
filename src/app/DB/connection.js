import mongoose from "mongoose";

const connectionDB = async () => {
 return await mongoose.connect("mongodb+srv://alihgad2:w3rlw2u4YMO785xE@bookshub.4uutypb.mongodb.net/assignment-8")
.then(()=>{
    console.log("3ash")
}).catch(err => console.error(err));
}

export default connectionDB