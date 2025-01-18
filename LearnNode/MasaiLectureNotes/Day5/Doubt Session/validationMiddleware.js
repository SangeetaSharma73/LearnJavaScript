const {POST_MESSAGE_FORMAT}=require('./message-format');

function validation_middleware(req,res,next){
    const body = req.body;
    // console.log(body);
    let is_validated=false;
    for(const key in body){
        const key_arr = POST_MESSAGE_FORMAT[key].split(",");
        // console.log(POST_MESSAGE_FORMAT[key]);
        if (typeof key_arr[0]=="Number")
        {
            console.log(key,typeof body[key] == "number");
        }
        else if (typeof key_arr[0] == "string") {
          console.log(key, typeof body[key] == "string");
        }
        else if(key_arr[0]=='object'){
            if(Array.isArray(body[key])){
                const string_check = body[key].filter((e)=>{
                    typeof e!="string";
                });
            }
            if(string_check.length>0){
                res.status(400).json({message:"Bad request: Array of string"})
            }
            
        }
         

    }
    next();
}

module.exports = {validation_middleware};