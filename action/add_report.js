require('dotenv').config();
const cookie = require('cookie');

const VERIFIERS_SECRET = process.env.VERIFIERS_SECRET;
const asyncWrapper = require("../function_mods/async")

const Report=require('../models/Report');
const Responder= require('../models/Responder');

const addReport = asyncWrapper(async(req, res)=>{
	const {type, category, phone, audio, images, desc, loc, flag} = req.body;

	try{
		let pass =  cookie.parse(req.headers.cookie || '').key;
		if(pass === VERIFIERS_SECRET && flag){
			let report = await Report.find({phone, audio, images, desc, loc});
			report.type = type;
			report.category = category;
			await report.save();
			res.status(201).send("successfully added to the verified Reporting...");
		}
		else if(pass === VERIFIERS_SECRET && !flag){
			await Report.remove({phone, audio, images, desc, loc});
			res.status(201).send("successfully added to the verified Reporting...");
		
		}
		else{
			await Report.create({phone, audio, images, desc, loc});
			let resp = await Responder.find({loc:{$near:loc}}).limit(1);
			res.status(201).send(`${resp[0].name} has been sent the complaint\nYou can contact them at ${resp[0].phone}`);
		}
	
	}
	catch(err){
		console.log(err);
		res.status(400).send("Server Error");
	};
});

module.exports = addReport;
