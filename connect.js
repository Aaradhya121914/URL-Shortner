import mongoose from "mongoose";
mongoose.set("strictQuery",true); //mongoose.set("strictQuery",true) use krne se hame jo bhi query send krte hai wo strict hoga jo ki database me nahi hai wo error dega
async function connectToMongoDB(url){
    return mongoose.connect(url)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log("MongoDB Connection Error:", err));
}

export { connectToMongoDB };