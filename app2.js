
//middleware 
var express=require('express');
var app= express();
var PORT=3000;

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
app.use(middleware.logger);
/*

app.use(middleware.requireAuthentication);
*/
app.get('/',function (req,res) {
res.send('Hello Express in app2 work!!')
});

/*
app.get('/about',function (req,res) {
res.send('About in app2!!')
}); 
*/

app.get('/about',middleware.requireAuthentication,function(req,res) {
	res.send('Hello i am in about section');
});

app.use(express.static(__dirname +'/public'));
console.log(__dirname)

app.listen(PORT,function () {
	console.log('Server Starts at the Port in app2 '+PORT);
});
