const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    try{
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            res.status(400).json({msg:"please login first"});

        }
        const decoded = jwt.verify(token,process.env.SECRET_KEY)

        req.body.userId = decoded.userId;
        req.body.user = decoded.user;
        next();
    }catch(err){
        res.status(400).json({err});
    }
    
}