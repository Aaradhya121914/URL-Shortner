import express from "express";
import URL from "../Models/url.js";
const router=express.Router();

router.get("/",async(req,res)=>{
    if(!req.user){
        return res.redirect("/login")
    }
    const allurls=await URL.find({createdBy:req.user._id});
    return res.render("home",{
        urls:allurls,
    });
})

router.get("/signup",(req,res)=>{
    return res.render("signup")
});

router.get("/login",(req,res)=>{
    return res.render("login")
});


export default router;

// import express from "express";
// import { handleSignUp, handleLogin } from "../Controllers/user1.js";
// import { restrictToLoggedinUserOnly } from "../Middleware/auth.js";

// const router = express.Router();

// router.post("/", handleSignUp);
// router.post("/login", handleLogin);

// // प्रोटेक्टेड रूट का उदाहरण
// router.get("/dashboard", restrictToLoggedinUserOnly, (req, res) => {
//     res.send("Welcome, " + req.user.email);
// });

// export default router;