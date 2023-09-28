const jwt = require(`jsonwebtoken`);

const JWT_SECRET="graphicerahilluniversity2022";

const fetchLawyer = (req,res,next)=>
{

    //getting lawyer from jwt token

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }

    try{
        const data= jwt.verify(token,JWT_SECRET);
        req.lawyer=data.lawyer;
        next();
    }catch(error)
    {
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
}

module.exports = fetchLawyer;