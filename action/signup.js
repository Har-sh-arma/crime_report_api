//Script have secure Signup
const { get_OTP, send_mail}= require('../action/email_verification');
const mongoose = require('mongoose');
const User = require('../models/User');
const OTP = require('../models/OTP');
const asyncWrapper = require('../function_mods/async');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userGetOtp = asyncWrapper( async( req, res, next) =>{
	const {name, email} = req.body;
	var repeated_mail = await User.findOne({email});
	if(repeated_mail){
		res.status(402);
		res.send("Already Signed Up");
	}
	else{	
		try{
			const otp = get_OTP().toString();
			send_mail(email, otp);
			const otp_hash = await bcrypt.hash( otp, saltRounds);
			console.log();
			await OTP.create({otp_hash, email, name});
			res.status(201);
			res.send(`${email} has been sent an otp.`)
			console.log(`${email} was sent ${otp}`);
		}catch(err){
			console.log(err);
		}
	}

});

const userVerifyOtp = asyncWrapper( async(req, res, next)=>{
	const {otp, email} = req.body;
	var OtpUser = await OTP.findOne({email});
	if(OtpUser){
		if(bcrypt.compare(otp, OtpUser.otp_hash)){
			const name = OtpUser.name;
			console.log(`Valid OTP: ${email} verified`);
			await User.create({name, email});
			res.send(`Successfully registered ${email}`);
			await OTP.deleteOne({email});
		}
		else{
			res.send("Invalid OTP");
		}
	}
	else{
		res.send('invalid Request')
	}
})



module.exports = {'userGetOtp': userGetOtp, 'userVerifyOtp': userVerifyOtp};
