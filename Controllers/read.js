const whatsapp=require("../watti")
const data = require("../Schema/data");

const getdetails = async (req) => {
  
  try {
    console.log(req.job_id);
    var datas = await data.find(
      { job_id: req.job_id },
      {
        job_id: 1,
        order_id: 1,
        customer_username: 1,
        customer_phone: 1,
        tookan_shared_secret: 1,
        fleet_name: 1,
        fleet_phone: 1,
        
        custom_fields: { $elemMatch: { label: "totalFare" } },
      }
    );

    var datamap = datas.map((item) => {
      var amount=item.custom_fields[0].data
      console.log(amount)
     return item.custom_fields[0].data;
     
    });
    const whats=whatsapp.whatsapp(datas,datamap)

   
    
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getdetails };



//qr code
// const results = qr.qr(amount);