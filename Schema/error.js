const mongoose = require('mongoose');
const dataerror=new mongoose.Schema({}, { strict: false })

module.exports = mongoose.model('dataerrors',dataerror);