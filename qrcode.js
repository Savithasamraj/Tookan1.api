const QRCode = require("qrcode");

let data="upi://pay?ver=01&mode=15&pa=rpy.qrcargoflolo47084431@icici&pn=Cargoflologistics&tr=RZPKsW4aRQEHQjrWUqrv2&cu=INR&mc=5817&qrMedium=04&tn=PaymenttoCargoflologistics&am=375.55"
QRCode.toString(data, function (err, QRcode) {
  if (err) return console.log(err);

  console.log(QRcode);
});