const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors())

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/AssessmentApp",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
},() => {
    console.log("MongoDB connection successful");

})

const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    mobile:Number,
    email:String,
    password:String,
    state:String,
    city:String,
    comment:String
})

const User = new mongoose.model("User",userSchema);

//Routes

//1.Register
app.post("/register",(req,res) => {
    const {name,username,mobile,email,password,state,city,comment} = req.body;
    User.findOne({email:email},(error,user) => {
        if(user){
            res.send({message:"User Already Exists"})
        }else{
            const user = new User({
                name,
                username,
                mobile,
                email,
                password,
                state,
                city,
                comment
            })

            user.save(error => {
                if(error){
                    res.send(error)
                }else{
                    res.send({message:"Registration successful,Please Login now!!"})
                }
            })
        }
    })

})

//2.Login

app.post("/login",(req,res) => {
    const {email,password} = req.body;
    User.findOne({email:email},(error,user) => {
        if(user){
            if(password === user.password){
                res.send({message:"Login Successful",user:user})
            }else{
                res.send({message:"Incorrect Password"})
            }
        }else{
            res.send("User Not Registered")
        }
    })

})



const port = 9002;

app.listen(port,() => {
    console.log(`Server is running on port number ${port}`);
})