
var middleware= {
	requireAuthentication: function (req,res,next) {
		console.log('private route hit!!');
		next();
	},
	logger: function(req,res,next) {
		//var date= new Date().toString();
		console.log('Request '+new Date().toString+''+req.method+" url is "+req.originalUrl);
	    next();
	}
};
module.exports=middleware