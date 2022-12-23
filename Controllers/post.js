const fs = require("fs");
const dataerror=require("../Schema/error")
const data = require("../Schema/data");

const datas = async (req, res) => {
  try {
    const jobdetails = await data.create(req.body);
    res.status(200).send({ message: "profile created" });
  } 
  
  
  
  catch (error) {
    const data = JSON.stringify(error);
  
    // const dataerrors=await  dataerror.create("error");
    fs.appendFile("error"+Math.floor(Math.random(0,100))+".txt", data+"\r\n", (err) => {

        if (err) console.log(err);
        else {
          console.log("File written successfully");
          
        }
      });

      const errors = await dataerror.create(error);
  
      res.status(200).send({ message: "error added" });


  }
  


//     const data = JSON.stringify(error);
//     console.log( "start" +error+"end")
// req.body=error

    // fs.writeFile("errors.txt", data, (err) => {
    //   if (err) console.log(err);
    //   else {
    //     console.log("File written successfully\n");
        
    //   }
    // });

//   const errors = await dataerror.create(data);
//   res.status(200).send({ message: "error added" });
  }
// };
module.exports = { datas};
