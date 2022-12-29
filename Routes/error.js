const express= require("express");
const {datas}=require("../Controllers/post")

const router=express.Router();
router.post("/jobdetails",datas)
router.get("/details",)
module.exports=router;