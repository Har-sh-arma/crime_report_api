const serverIsRunning = (req,res,next)=>{
    console.log('Request is made through IP');
    next();
}

module.exports = serverIsRunning;
