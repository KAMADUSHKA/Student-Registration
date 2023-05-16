require('dotenv').config()

const express = require('express');

const app = express();

const mongoose = require('mongoose');

const workoutRoutes = require('./routes/register');
const userRoute = require('./routes/loginRoute')

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
});


//Routrs
// app.get('/',(req,res)=>{
//     res.json({mssg:'Welcome to the app'})
// })

app.use('/Login', userRoute)
app.use('/api/register',workoutRoutes)

  
//connect to the DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for request
app.listen(process.env.PORT, ()=>{
    console.log('connected to DB & listening on port ',process.env.PORT)
}); 
})

.catch((error)=>{
    console.log(error)
});

// //listen for request
// app.listen(process.env.PORT, ()=>{
//     console.log('listening on port ',process.env.PORT)
// });