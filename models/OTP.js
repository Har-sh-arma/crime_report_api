//Script containing Schema for OTP_Hash

const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({otp_hash:String,
                                        email: String,
					name:String});

const OTP = mongoose.model("OTP", otpSchema);

module.exports = OTP;
