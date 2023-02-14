require('dotenv').config();
const cookie = require('cookie');

const ADMIN_SECRET = process.env.ADMIN_SECRET;
const asyncWrapper = require("../function_mods/async")

const Responder=require('../models/Responder');

const addResponder = asyncWrapper(async(req, res)=>{
	const {type, category, phone, name, loc} = req.body;

	try{
		let pass =  cookie.parse(req.headers.cookie || '').key;
		if(pass === ADMIN_SECRET){
			await Responder.create({type, category, phone, name, loc});
			res.status(201).send("successfully registered");
		}
		else{
			res.status(401).send("Unauthorized");
		}
	
	}
	catch(err){
		console.log(err);
		res.status(400).send("Server Error");
	};
});

module.exports = addResponder;
