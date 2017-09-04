var express = requerer('express')
var app = express();

var port = process.env.PORT || 8080;
app.get('/', function (req, res){
    res.send('hello word!');
});
app.listen(port, function(){
    console.log('Porta'+port);
});
