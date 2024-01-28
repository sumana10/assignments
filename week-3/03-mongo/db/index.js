const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/courseDb');
//mongoose.connect('mongodb+srv://xor27:HeL0103HHuJeQ7aC@cluster0.weflrsc.mongodb.net/course_selling_app?retryWrites=true&w=majority');


// Define schemas
// const AdminSchema = new mongoose.Schema({
//     // Schema definition here
//     username:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true,
//         length:8
//     },
// },
// {
//     timestamps: true,
//       });

      const AdminSchema = new mongoose.Schema({
        // Schema definition here
        username:String,
        password:String
    });

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        length:8
    },
    purchasedCourses: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'Course',
        },
      ],
   
});


const CourseSchema = new mongoose.Schema({
    // Schema definition here
    courseId:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    imageLink:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        required:true
    },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}