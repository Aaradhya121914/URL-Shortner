import User from "../Models/users.js";
import { setUser } from "../Service/auth.js";
async function handleSignUp(req,res) {
const {name,email,password}=req.body;
if(!name || !email || !password){
    return res.status(400).json({error:"Please fill all the fields"});
}
await User.create({
    name,email,password,
});
return res.status(201).redirect("/login");
}

async function handleLogin(req,res) {
    const {email,password}=req.body;
    const user=await User.findOne({email,password});
    if(!user){
        return res.render("login",{error:"Invalid Email or Password"});
    }
    
    const token=setUser(user);
    res.cookie("uid",token);
    return res.redirect("/");
}
export {handleSignUp,handleLogin};