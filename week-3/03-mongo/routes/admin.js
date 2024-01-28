const { Router } = require("express");
//const adminMiddleware = require("../middleware/admin");
const {Admin,Course}=require('../db');
const router = Router();
const { adminMiddleware, courseExistsMiddleware } = require('../middleware/admin');

// Admin Routes
// router.post('/signup', async(req, res) => {
//     // Implement admin signup logic
//     const {username,password}=req.body;
//     const newAdim= await Admin.create(({username,password}));
//         if(!newAdim){
//             res.status(500).send("Error signing up admin");
//         }else{
//             res.status(200).send("Admin  created successfully");
//         }
// });
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

   await Admin.create({
        username:username,
        password:password
    })
    
    res.json({message:"Admin created successfully"});
});

router.post('/courses', adminMiddleware, courseExistsMiddleware, async (req, res) => {
    try {
        const { courseId, title, description, price, imageLink, published } = req.body;
        const course = await Course.create({ courseId, title, description, price, imageLink, published });
        return res.status(200).json({ msg: "Course created successfully", courseId: course.courseId });
    } catch (error) {
        console.error("Error creating course:", error.message);
        return res.status(500).json({ msg: "Error creating course" });
    }
});



router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find({});
     res.status(200).json({courses});
});

module.exports = router;