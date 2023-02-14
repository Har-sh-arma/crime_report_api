//Script containing Schema for student User

const mongoose = require('mongoose');

const responderSchema = new mongoose.Schema({type: {type:Number, required: true, min: 1, max: 4},
					category: {type: Number, required: true, min: 5, max: 9},
					phone: {type: Number, required: true, min:1000000000, max: 9999999999},
					name: {type: String, required: true},
					loc :{type: Object, required: true, unique:true}});



const Responder = mongoose.model("Responder", responderSchema);

module.exports = Responder;
