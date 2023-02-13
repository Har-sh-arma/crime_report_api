const router = require('express').Router();
const {userGetOtp, userVerifyOtp} = require('../action/signup.js')

router.get('/',(req,res)=>{
    res.status(200).send({"Message":"Beep Beep Boop Boop the server is acting"});

})

router.post('/',userGetOtp);
router.post('/verify', userVerifyOtp);
module.exports= router;
