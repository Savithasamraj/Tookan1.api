const fs = require('fs');

const data =require("../Schema/data")

const  datas= async(req,res)=>{
    
    try{
 const  jobdetails= await data.create(req.body)
 res.status(200).send({message:"profile created"}
    )
    }
    catch(error){
        console.log(error)
var data=error
fs.writeFile('error.txt',data )

    }
}
module.exports={datas}