require('dotenv').config();
const SENDER_PASS = process.env.SENDERPASS;
const SENDER_MAIL = process.env.SENDERMAIL;
const nodemailer = require('nodemailer');

const get_OTP = () =>{
	let a = Math.ceil(Math.random()*10000);
    	let otp = a<1000?(a+1000):a;
	return otp;
}

const send_mail = async (usr_email, otp) => {
  const transporter= nodemailer.createTransport({
      service : "Gmail",
      auth :{
          user:SENDER_MAIL,
          pass:SENDER_PASS
      }
  })
  const options={
      from :SENDER_MAIL,
      to:`${usr_email}`,
      subject:"OTP FOR VERIFICATION",
      text: `${otp}`,
    }
 
  transporter.sendMail(options, function(err,info){
      if(err){
          console.log(err);
          return;
      }
      console.log("Sent" +info.response)
  })
}

module.exports = {get_OTP, send_mail};
