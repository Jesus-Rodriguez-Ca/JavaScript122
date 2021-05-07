

const dataModule = require('./data')
const http = require("http");
const fs = require("fs");
const qs = require('querystring');

http.createServer((req,res) => {
     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    //var path = req.url.toLowerCase();

    var url = req.url.split("?");
    let query = qs.parse(url[1]);
    switch(path) {
        case '':
            fs.readFile("home.html", (err, data) => {
             if (err) return console.error(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
             res.end(data.toString());
            });
            break; 
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');
            break;
        case '/detail':
            
            let search = dataModule.getItem(query.name);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            let result = (search) ? JSON.stringify(search): "not found" ;
            res.end('result for ' + query.name + '....' + result);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found...');
            break;
    }
}).listen(process.env.PORT || 3000);


