//Script containing Schema for student User

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
					category:Number,
					type:Number,
					audio: String,
					images: String,
					phone: {type: Number, min:1000000000, max: 9999999999},
					desc:  String,
					loc: {type: Object, required: true}});



const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
