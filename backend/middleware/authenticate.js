const jwt=require('jsonwebtoken');
var authenticate = function(req,res,next){
	// console.log(req.header);
	var xAuth = req.header('x-auth');
	var username=req.header('username');
	var token=req.header('token');
	console.log(xAuth);
	var decoded;
	try{

		decoded = jwt.verify(token, "NCS@123xD");
		console.log(decoded);
		if(decoded.user == "NCSUSER@123"){
			req.username = "NCSUSER@123";
			next();
		}
		else{
			res.status(401).send();
		}

	}catch(e){
		res.status(401).send();
	}
};

module.exports=authenticate;
