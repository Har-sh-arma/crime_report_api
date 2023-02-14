const router = require('express').Router();
const addResponder = require('../action/add_responder')
const addReport = require('../action/add_report')

router.get('/',(req,res)=>{
    res.status(200).send({"Message":"Beep Beep Boop Boop the server is acting"});

});

router.post('/addResponder',addResponder);
router.post('/addReport',addReport);

module.exports= router;
