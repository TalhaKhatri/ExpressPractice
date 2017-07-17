var express = require('express');
var fs = require('fs');
var app = express();
app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if(err) console.log(err);
        var obj = JSON.parse(data);
        res.json(obj);
        res.end();
    });
});
app.listen(process.argv[2]);