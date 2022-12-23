const express= require("express");
const {datas}=require("../Controllers/post")
const router=express.Router();
router.post("/jobdetails",datas)
module.exports=router;