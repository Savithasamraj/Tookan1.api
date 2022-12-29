const QRCode = require("qrcode");
const details=require("../backend/Controllers/read")

const qr=(amount)=>{
 console.log(amount)
  let data= `upi://pay?ver=01&mode=15&pa=rpy.qrcargoflolo47084431@icici&pn=Cargoflologistics&tr=RZPKsW4aRQEHQjrWUqrv2&cu=INR&mc=5817&qrMedium=04&tn=PaymenttoCargoflologistics&am=${amount}`
QRCode.toString(data, function (err, QRcode) {
  if (err) return console.log(err);

  console.log(QRcode);
});

}

module.exports={qr}


// let data= `upi://pay?ver=01&mode=15&pa=rpy.qrcargoflolo47084431@icici&pn=Cargoflologistics&tr=RZPKsW4aRQEHQjrWUqrv2&cu=INR&mc=5817&qrMedium=04&tn=PaymenttoCargoflologistics&am=${datamap}`
// QRCode.toString(data, function (err, QRcode) {
//   if (err) return console.log(err);

//   console.log(QRcode);
// });

