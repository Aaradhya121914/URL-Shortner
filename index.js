import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import { connectToMongoDB } from "./connect.js";
import URL from "./Models/url.js";
import {restrictToLoggedinUserOnly,checkAuth} from "./Middleware/auth.js";
import urlRoute from "./routes/url.js";
import staticRoute from "./routes/staticRouter.js";
import userRoute from "./routes/user.js";

const app = express();
const port = 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));//this told us that where our ejs file is stored



app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser()); // for parsing cookies
// app.use(checkAuth);


app.use("/url",restrictToLoggedinUserOnly,urlRoute); // /url pr agr koi request aye to urlRoute pr jayega
//restrictToLoggedinUserOnly  middleware sirf tabhi chalega jab request /url pr aayegi
//this means ki agar hame /url wale data ko access karna hai to sirf login hone ke baad hi kar sakte hai
app.use("/",checkAuth,staticRoute); // / pr agr koi request aye to staticRoute pr jayega
app.use("/user", userRoute); // /user pr agr koi request aye to userRoute pr jayega
app.use('/styles', express.static(path.join(process.cwd(), 'public/styles')));

// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home"); 
// });
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  res.redirect(entry.redirectURL);
});


app.listen(port, () => {
  console.log(`Port ${port} is Running!!!`);
});


