const express= require("express");
const {datas}=require("../Controllers/post")
const {getdetails}=require("../Controllers/read")
const router=express.Router();
router.post("/jobdetails",datas)
router.get("/details",getdetails)
module.exports=router;