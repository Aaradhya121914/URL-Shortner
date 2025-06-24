import express from "express";
import {handleGenerateNewShortURL, handleGetanalytics} from "../Controllers/url.js"
const router=express.Router();

router.post("/",handleGenerateNewShortURL); // / pr agr koi request aye toh handleGenerateNewShortURL function run hoga
router.get("/analytics",handleGetanalytics) // /analytics pr agr koi request aye toh handleGetanalytics function run hoga

export default router;