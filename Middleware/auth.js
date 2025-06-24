import { getUser } from "../Service/auth.js";

async function restrictToLoggedinUserOnly(req, res, next) {
    const token = req.cookies?.uid;
    if (!token) {
        return res.redirect("/login");
    }
    const user = getUser(token);
    if (!user) {
        return res.redirect("/login");
    }
    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const token = req.cookies?.uid;
   
    const user = getUser(token);
  
    req.user = user;
    next();
}

export { restrictToLoggedinUserOnly,checkAuth };