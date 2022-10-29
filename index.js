import express from 'express';
 import bodyParser from 'body-parser';
 import userRoutes from './routes/users.js'
 import mongoose from 'mongoose';
 import dotenv from 'dotenv'
 dotenv.config()
 const app=express();
 const PORT=5000;

 app.use(bodyParser.json());
 app.use('/users',userRoutes)
 app.get('/',(req,res)=> res.send('hello from the other side'));

mongoose.connect(process.env.DB_URI,()=>{
console.log('connected to db')
})

 app.listen(PORT ,()=> console.log("app started successflle"))