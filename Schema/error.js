const mongoose = require('mongoose');
const dataerror=new mongoose.Schema({
    error:{type:Object}
})
module.exports = mongoose.model('dataerrors',dataerror);