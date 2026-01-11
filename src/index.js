// require("dotenv").config({path: './.env'});
import dotenv from "dotenv";
import experss from "express";
import connectDB from "./db/db.js";
const app = experss();
dotenv.config({path: './.env'});
const PORT = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.listen(PORT || 8000,()=>{
        console.log(`App is listening on port ${PORT}`);    
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !! !",err);
})


/*
;( async () => {
    try{
        await mongoose.connect(`${process.env.
            MONGODB_URL}/${DB_NAME}`);
            app.on('error',(error)=>{
                console.log("Error",error);
                throw error;
            })
            
            app.listen(process.env.PORT,()=>{
                console.log(`App is listening on port ${process.env.PORT}`);
            });
    }catch(error){
        console.error('Error',error);
        throw error;
    }
})()
*/