const http = require('http');

const hostname = 'localhost';
const port = 3000;
//127.0.0.1:3000

const server = http.createServer((req,res) => {
    
//O cabeçalho da solicitação Access-Control-Request-Headers é usado ao emitir um preflight request
//para permitir que o servidor saiba quais cabeçalhos HTTP serão usados quando a solicitação real for feita
    console.log(req.headers);    
    res.statusCode = 200; //responde ok    
    res.setHeader('Content-Type', 'text/html');    
    res.end('<html><body><h1>Hello, World!</h1></body></html>')
})
const teste = "oi"
server.listen(port, hostname, ()=>{
    console.log(`Server online em http://${hostname}:${port} ${teste}`);
})