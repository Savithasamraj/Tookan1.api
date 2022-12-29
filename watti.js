const axios = require('axios');
 const whatsapp=(datas,datamap)=>{
  console.log(datas,datamap)
  const options = {
    method: 'POST',
    url: 'https://live-server-100817.wati.io/api/v1/sendTemplateMessage?whatsappNumber=916361265991',
    headers: {
      'content-type': 'text/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YmYyZjlkMy0yMDNjLTQxZmYtOGUzNi1hOGE2NGJmMTUzMTciLCJ1bmlxdWVfbmFtZSI6ImRyaXN0aS5tYWhhbnRhQGNhcmdvZmxvLmNvIiwibmFtZWlkIjoiZHJpc3RpLm1haGFudGFAY2FyZ29mbG8uY28iLCJlbWFpbCI6ImRyaXN0aS5tYWhhbnRhQGNhcmdvZmxvLmNvIiwiYXV0aF90aW1lIjoiMTIvMjYvMjAyMiAxMDowNzoyMyIsImRiX25hbWUiOiIxMDA4MTciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.-X_Ls8cKibn2V4QCXU7cy0i6rR9_f3DWiGO_9Ku3Sqw'
    },
    data: {
      parameters: [
        {name: 'name', value: `${datas[0].fleet_name}`},
        {name: 'total_price', value: `${datamap}`},
        {name: 'attribute_1', value:  `${datas[0].customer_username}`},
        {name: 'phone', value:  `${datas[0].customer_phone}`},
        {name: 'order_number', value:  `${datas[0].order_id}`}
      ],
      template_name: 'qrcodenew',
      broadcast_name: ' BroadcastQRCode'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
 }
module.exports={whatsapp}