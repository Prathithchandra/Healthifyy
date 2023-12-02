import express from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctor.js'
import reviewRoute from './Routes/review.js'

dotenv.config()

const express = require("express")
const app = express()
const path = require("path")

app.listen(3000,()=>{
    console.log("Port Connected")
})

const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get('/',(req,res)=>{
    res.send('Api is working')
})

//Database Connection
mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB database is connected')
    }catch(err){
        console.log('MongoDB database connection failed')
    }
}

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/review', reviewRoute);

app.listen(port,()=>{
    connectDB();
    console.log("Server is running on port" + port);
});
