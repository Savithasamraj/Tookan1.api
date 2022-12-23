const fs = require('fs');

const data =require("../Schema/data")

const  datas= async(req,res)=>{
    
    try{
 const  jobdetails= await data.create(req.body)
 res.status(200).send({message:"profile created"}
    )
    let data = "This is a file containing a collection of books.";
          
    fs.writeFile("books.txt", data, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        
      }
    });

    }
    catch(error){
        console.log(error)


        
  
      
    }
}
module.exports={datas}