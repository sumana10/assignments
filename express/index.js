// //const express = require("express");
// //  const fs = require("fs");
// // const path = require("path");
// // const session = require('express-session');
// // const MemoryStore = require('memorystore')(session); // Using MemoryStore as an example
// // Node.js program to demonstrate
// // the fs.readFile() method

// // Use fs.readFile() method to read the file
// // fs.readFile('secretpath/Demo.txt', 'utf8', function(err, data){
// // // Display the file content
// // console.log(data);
// // });

// // console.log('readFile called');
// //import fs from "fs";
// //import path from "path";
// // const app = express();
//  const express = require('express');
//  const app = express();
//  const PORT = 3001;
// // const cors = require('cors');
//  //app.use(cors());

// let users = [
//   {
//     name: "Alien",
//     kidneys: [
//       {
//         healthy: false,
//       },
//       {
//         healthy: true,
//       },
//       {
//         healthy: false,
//       }
//     ],
//   },
// ];

// // app.listen(3000);
// // console.log("Listening!");

//  app.use(express.json());

// // app.get("/", (req, res) => {
// //   const userKidneys = users[0].kidneys;
// //   const numberOfKidneys = userKidneys.length;
// //   let numberOfHealthyKidneys = 0;

// //   for (let i = 0; i < userKidneys.length; i++) {
// //     if (userKidneys[i].healthy) {
// //       numberOfHealthyKidneys++;
// //     }
// //   }

// //   const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

// //   res.json({
// //     numberOfKidneys,
// //     numberOfHealthyKidneys,
// //     numberOfUnhealthyKidneys,
// //   });
// // });

// // app.post("/", function(req, res) {
// //   const isHealthy = req.body.isHealthy;
// //   users[0].kidneys.push({
// //       healthy: isHealthy
// //   });
// //   res.json({
// //       msg: "Done!"
// //   });
// // });


// // // app.get('/', (req, res) => {
// // //   res.send("Wlcm");
// // // });

// // app.get('/SI', (req, res) => {
// //   const p = parseInt(req.query.p);
// //   const r = parseInt(req.query.r);
// //   const t = parseInt(req.query.t);

// //   if (isNaN(p) || isNaN(r) || isNaN(t)) {
// //     res.status(400).send("Invalid input. 'p', 'r', and 't' must be numbers.");
// //     return;
// //   }

// //   const si = (p * r * t) / 100;
// //   res.send(si.toString());
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });

// // const express = require("express");
// // const app = express();
// // const port = 3479;

// // app.get("/health", function (req, res) {
// //     const id = req.headers.id;
// //     const pass = req.headers.pass;
// //     const kidney_no = req.query.kidney_no;

// //     if (id != "ij" || pass != "pass") {
// //         res.status(403).json({
// //             msg: "Wrong id / pass"
// //         });
// //         return;
// //     }

// //     if (kidney_no !== "1" && kidney_no !== "2") {
// //         res.status(411).json({
// //             msg: "You're ded boii"
// //         });
// //         return;
// //     }

// //     res.status(200).json({
// //         msg: "You okay"
// //     });
// // });

// // app.listen(port, function () {
// //     console.log("The Server Runs On The Port: " + port);
// // });


// // app.get ("/test", function(req, res){
// //     res.send ("hi there") ;
// // })
// //app.listen(3000) ;

// // const mongoose = require("mongoose");

// // mongoose.connect("mongodb+srv://singhyuvraj:qwerty1234@cluster0.8wicnur.mongodb.net/userappnew?retryWrites=true&w=majority");

// // const User = mongoose.model('User', { name: String, email: String, password: String });

// // const user = new User({
// //   name: 'yuvraj',
// //   email: 'xyz@gmail.com',
// //   password: '1234'
// // });

// // user.save()
// //   .then(result => {
// //     console.log("User saved successfully:", result);
// //   })
// //   .catch(error => {
// //     console.error(error);
// //   });

// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.use(cors());

const express = require('express');
const app = express();
const Port = 3000;
const jwt = require('jsonwebtoken');
const insertData = require('./db');
const userSchema = require('./schema');
const secretKey = "Lakshay21e87h2fdh2";
const cors = require('cors');
app.use(
    cors({
        origin:"http://localhost:5173",
        methods: [ 'GET', 'POST' ],
        // allowedHeaders: ['Content-Type','Authorization']
    })
);

app.use(express.json());


app.post('/signup',(req,res)=>{
    const user = req.body;
    const userParse = userSchema.safeParse(user);
    if(!userParse.success){
        res.json({
            msg:'You Send the Wrong Inputs',
        })
    }else{
        insertData(user.name,user.email,user.password);
        const token = jwt.sign({password:user.password},secretKey);
        res.json({
            msg:'User is Created',
            token:token
        })
    }
})

app.listen(Port,()=>{
    console.log('Port is Listen');
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });
// app.get('/sum', (req, res) => {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   const sum = a + b;
//   res.send(sum.toString());
// });
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // const express = require("express");
// // const zod=require("zod");
// // const app = express();
// // const schema=zod.array(zod.number());
// // app.use(express.json());

// // app.post("/healthcheckup", function(req, res) {
// //   const kidney = req.body.kidney;
// //   const response=schema.safeParse(kidney);
// //   if(!response.success){
// //      res.status(411).json({
// //      msg: "Invalid input"
// //     });
// //   }
// //   else {
// //     res.send({
// //       response
// //     });
// //   }
// // });

// // const port = 3002; // Change this to the desired port number
// // app.listen(port, () => {
// //   console.log(`Server listening on port ${port}`);
// // });   

// // const express = require('express');
// // const app = express();
// // const port = 3000;

// // // Require the upload middleware
// // const upload = require('./upload');

// // // Set up a route for file uploads
// // app.post('/upload', upload.single('file'), (req, res) => {
// //   // Handle the uploaded file
// //   res.json({ message: 'File uploaded successfully!' });
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });

// //const fs = require('fs');

// // function read(cb) {
// //     fs.readFile("aws.txt", "utf-8", function (err, data) {
// //         if (err) {
// //             console.error(err);
// //             return;
// //         }
// //         cb(data);
// //     });
// // }

// // function onDone(data) {
// //     console.log(data);
// // }

// // read(onDone);

// // import express from "express"
// // import collection  from "./mongo.js";
// // import cors from "cors"
// // const App = express();
// // App.use(express.json());
// // App.use(cors());

// // App.get("/",cors(),(req,res)=>{

// // })


// // App.post("/",async(req,res)=>{
// //     const {email,password} = req.body
// //     //hello hello
// //     try{
// //         const check = await collection.findOne({email:email})

// //         if(check){
// //             res.json("exist")
// //         }else{
// //             res.json("notexist")
// //         }
        
// //     }
// //     catch(e){
// //         console.log(e);
// //         res.json("notexist")
// //     }
// // })


// // App.post("/signup",async(req,res)=>{
// //     const {email,password} = req.params.body
// //     const data ={
// //         email:email,
// //         password:password
// //     }
// //     try{
// //         const check = await collection.findOne({email:email})

// //         if(check){
// //             res.json("exist")
// //         }else{
// //             res.json("notexist")
// //             await collection.insertMany([data])
// //         }
        
// //     }
// //     catch(e){
// //         res.json("notexist")
// //     }
// // })


// // App.listen(8000,()=>{
// //     console.log("port connected");
// // })

// // 

// // const express = require('express');

// // const app = express();

// // const port = 3000;

// // app.get('/', function(req, res){
// //     res.send('hello')
// // })

// // app.listen(3001, ()=>console.log("running"))

// // Import the fs package
// //import fs from "fs-access";

// // // Get the absolute path of the file
// // //const filepath = path.join("uploads/", "aws.txt");
// // const filepath = path.join(__dirname, "uploads/", "aws.txt");
// // const dir = path.dirname(filepath);
// // // Create the directory if it doesn't exist

// // if (!fs.existsSync(dir)) {
// //   fs.mkdirSync(dir, { recursive: true });
// // }

// // // Read the file content asynchronously
// // fs.readFile(filepath, "utf-8", (err, data) => {
// //   if (err) {
// //     console.error("Error reading file:", err);
// //   } else {
// //     console.log("File data:", data);
// //   }
// // });

// // Assuming Store is defined somewhere before this code
// // app.use(session({
// //   secret: 'cat',
// //   resave: false,
// //   saveUninitialized: false,
// //   store: new MemoryStore({
// //       checkPeriod: 86400000 // prune expired entries every 24h (in ms)
// //   })
// // }));

// // app.get('/', (req, res) => {
// //   res.send('loginFirst');
// // });

// // app.post('/register', (req, res) => {
// //   res.send('done');
// // });

// // app.get('/sec', CheckLogin, (req, res) => {
// //   res.render('scre.ejs');
// // });

// // app.post('/login', (req, res) => {
// //   // Assuming findPassword middleware is implemented
// //   findPassword(req, res, () => {
// //       req.session.isLogin = true;
// //       res.redirect('/sec');
// //   });
// // });

// // app.post('/logout', (req, res) => {
// //   req.session.destroy((err) => {
// //       if (err) {
// //           console.log(err);
// //           res.send('cannot logout');
// //       } else {
// //           res.redirect('/');
// //       }
// //   });
// // });

// // function CheckLogin(req, res, next) {
// //   req.session.isLogin ? next() : res.redirect('/');
// // }

// // const PORT = 3000;



// // //module.exports = CheckLogin;
// app.get("/", function(req,res){
//     const johnKidneys=users[0].kidneys;
//     const numofkid=johnKidneys.length;
//     let numofhealthykidney=0;
//     for(let i=0; i<johnKidneys.length; i++){
//         if(johnKidneys[i].healthy) numofhealthykidney+=1;
//     }

//     const numofunhealthykid=numofkid-numofhealthykidney;

//     res.json({
//         numofkid,
//         numofhealthykidney,
//         numofunhealthykid
//     })
// })

// // app.post("/", function(req,res){
// //     console.log(req.body)
// //     const isHealthy=req.body.isHealthy
    
// //     users[0].kidneys.push({
// //         healthy:isHealthy
// //     })

// //     res.json({
// //         msg:"Done"
// //     })
// // })

// app.post("/", function(req, res) {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//       healthy: isHealthy
//   });
//   let alienkidney = users[0].kidneys.length
//   console.log(alienkidney);
//   res.json({
//       msg: "Done!"
//   });
// });

// app.put("/", function(req,res){
//     for(let i=0; i<users[0].kidneys.length; i++){
//          users[0].kidneys[i].healthy=true
//     }
//     res.json({})
// })

// //removing unhealthy kidney
// // app.delete("/", function(req,res){
// //     const newKidney=[]
// //     for(let i=0; i<users[0].kidneys.length; i++){
// //         if(users[0].kidneys[i].healthy){
// //             newKidney.push({
// //                 healthy:true
// //             })
// //         }
// //     }

// //     users[0].kidneys=newKidney
// //     res.json({msg:"Is Done"})

// // })

// // app.delete("/", function(req, res) {
// //     const newKidney = [];
// //     let unhealthyKidneyRemoved = false;

// //     for (let i = 0; i < users[0].kidneys.length; i++) {
// //         if (!unhealthyKidneyRemoved && !users[0].kidneys[i].healthy) {
// //             // If the kidney is unhealthy and hasn't been removed yet,
// //             // remove it and mark that an unhealthy kidney has been removed.
// //             unhealthyKidneyRemoved = true;
// //         } else {
// //             // If the kidney is healthy or an unhealthy kidney has already been removed,
// //             // keep it in the newKidney array.
// //             newKidney.push(users[0].kidneys[i]);
// //         }
// //     }

// //     users[0].kidneys = newKidney;
// //     res.json({ msg: "Is Done" });
// // });

//  // const newKidney = [];
//   // let kidneyRemoved = false;

//   // for (let i = 0; i < users[0].kidneys.length; i++) {
//   //     if (!users[0].kidneys[i].healthy && !kidneyRemoved) {
//   //         kidneyRemoved = true;
//   //         continue;
//   //     }
//   //     newKidney.push(users[0].kidneys[i]);
//   // }

//   // Create a shallow copy of the original array
//    // Find the index of the first unhealthy kidney and remove it

// app.delete("/", function(req, res) {
  
//     const newKidney = [...users[0].kidneys]; 
//     const indexToRemove = newKidney.findIndex(kidney => !kidney.healthy);
//     if (indexToRemove !== -1) newKidney.splice(indexToRemove, 1);

//     users[0].kidneys = newKidney;
//     res.json({ msg: "Is Done" });
// });


// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require('mongoose');

// const jwtPassword = "123456";
// const app = express();

// mongoose.connect("mongodb://localhost:27017/admin", {

// //   serverSelectionTimeoutMS: 20000, // Set to 20 seconds

// });

// // Create a Mongoose model for the User
// const User = mongoose.model("User", {
//   username: String,
//   // Other user properties can be added as needed
// });

// app.use(express.json());

// app.post("/login", async (req, res) => {
//   const { username } = req.body;

//   // Check if the username is provided, handle errors accordingly
//   if (!username) {
//     return res.status(400).json({ error: "Username is required" });
//   }

//   try {
//     // Check if the username already exists in the database
//     const existingUser = await User.findOne({ username });

//     if (!existingUser) {
//       // If the username doesn't exist, create a new user or handle as needed
//       const newUser = new User({ username });
//       await newUser.save();

//       // Create a JWT token with the provided username
//       const token = jwt.sign({ username }, jwtPassword);

//       // Return the token in the response
//       return res.json({
//         token,
//       });
//     } else {
//       // If the username already exists, handle accordingly (e.g., return an error)
//       return res.status(409).json({ error: "Username already exists" });
//     }
//   } catch (error) {
//     // Handle database or other errors
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.post("/signup", async(req, res) =>{
  
// })

// app.listen(3000, () => {
//   console.log("Server is connected on port 3000");
// });

// const mongoose = require("mongoose");
 
// mongoose.connect("mongodb+srv://thefoxbat:Thefoxbat02@cluster0.61dlidh.mongodb.net/newuserapp?retryWrites=true&w=majority&appName=Cluster0");
 
// const User = mongoose.model('User', { name: String, email: String, password: String });
 
// const user = new User({
//   name: 'test',
//   email: 'test@gmail.com',
//   password: '1234'
// });
 
// user.save()
//   .then(result => {
//     console.log("User saved successfully:", result);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// const express = require("express");
// const zod = require("zod");
// const app = express();
// app.use(express.json());

// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(5)
// });

// function inputValid(obj) {
//     return schema.safeParse(obj);
// }

// app.post("/health", function(req, res) {
//     const response = inputValid(req.body);
//     if (response.success) {
//         return res.send("Your kidney is healthy");
//     } else {
//         return res.status(400).send("...");
//     }
// });

// app.listen(3000);

// const express = require("express");
// const zod = require("zod");
// const app = express();
// app.use(express.json());

// function inputValid(obj) {
//     const schema = zod.object({
//         email: zod.string().email(),
//         password: zod.string().min(5)
//     });
//     const response = schema.safeParse(obj);
//     console.log(response)
//     return response;
// }

// app.post("/health", function(req, res) {
//     const response = inputValid(req.body);
//     console.log(req.body)
//     if (response.success) {
//         // Input is valid
//         return res.send("Your kidney is healthy");
//     } else {
//         // Input is invalid
//         return res.status(400).send("");
//     }
// });

// app.listen(3000);