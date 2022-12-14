const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');

// Express App
const app = express();
const workoutRoutes = require('./routes/workout');

// middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

// app.get('/',(req,res)=>{
//     res.json({mssg:'Welcome to the app'});
//     next();
// })
app.use('/api/workouts',workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log("listening on port ", process.env.PORT);
})
})
.catch((error)=>{
    console.log(error);
})

// Listen  for the requests
