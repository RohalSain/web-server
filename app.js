var express=require('express');
var app= express();
var PORT=3000;
app.get('/',function (req,res) {
res.send('Hello Express!!')
});
app.get('/about',function (req,res) {
res.send('About!!')
});
app.use(express.static(__dirname +'/public'));
console.log(__dirname)
app.listen(PORT,function () {
	console.log('Server Starts at the Port '+PORT);
});

//PORT ->it means the value can be change