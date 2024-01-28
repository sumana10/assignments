// Middleware for handling auth
const {Admin, Course} = require('../db/');


// async function adminMiddleware(req, res, next) {

//     const {username,password}=req.headers;
//     const VerifiedAdmin= await Admin.findOne({username:username,password:password});    

//  if(!VerifiedAdmin){
//     res.status(401).send("Unauthorized");
//     return;
//  }else{
//     next();
//  }  
// }
function adminMiddleware(req, res, next) {
   // Implement admin auth logic
   // Check headers and validate admin from the admin DB. Refer to readme for expected headers.

   const username = req.headers.username;
   const password = req.headers.password;

   Admin.findOne({
       username,
       password
   })
   .then(function(value) {
       console.log(value);

       if (value) {
           next();
       } else {
           res.status(403).json({
               msg: "Admin does not exist"
           });
       }
   })
   .catch(function(error) {
       console.error(error);
       res.status(500).json({
           msg: "Internal Server Error"
       });
   });
}

function courseExistsMiddleware(req, res, next) {
   const title = req.body.title;
   const price = req.body.price;
   const description = req.body.description;
   const image = req.body.imagelink;

   Course.findOne({
       title,
       price,
       description,
       image
   })
   .then(function(value) {
       console.log(value);

       if (value) {
           res.status(403).json({
               msg: "Course already exists"
           });
       } else {
           next();
       }
   })
   .catch(function(error) {
       console.error(error);
       res.status(500).json({
           msg: "Internal Server Error"
       });
   });
}

module.exports = {
   adminMiddleware,
   courseExistsMiddleware
};
