// import mongoose, { connect } from "mongoose";


// const connectDB = async () => {
//     try {
//         mongoose.connection.on('connected',()=>console.log("DataBase is Connected"))
//         await mongoose.connect(`${process.env.MONGODB_URI}/QuickBlog`)
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// }
// export default connectDB
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database is Connected"));
        mongoose.connection.on('error', (err) => console.log("MongoDB connection error:", err));
        // await mongoose.connect(`${process.env.MONGODB_URI}/QuickBlog`);
        await mongoose.connect(process.env.MONGODB_URI);
    }
    catch (error) {
        console.log(error.message);
    }
}
export default connectDB;