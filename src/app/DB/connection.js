import { configDotenv } from "dotenv";
import mongoose from "mongoose";

const connectionDB = async () => {
    let url = configDotenv().parsed.URI
 return await mongoose.connect(url)
.then(()=>{
    console.log("3ash")
}).catch(err => console.error(err));
}

export default connectionDB

