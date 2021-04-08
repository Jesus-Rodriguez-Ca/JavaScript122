const http = require('http');
const url = require("url");


const app = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url).pathname
    if(reqUrl == "/") {
        res.write("pagina principal")
        res.end()
    }
    else if(reqUrl == "/about") {
        res.write("pagina acerca del tocayo")
        res.end()
    }
})



app.listen(3000, '127.0.0.1');
console.log('corriendo en localhost');