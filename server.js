const http= require('http');
// 포트 설정
const port= 4000;
const server= http.createServer((req, res)=>{
    // writeHead코드는 한 번만 호출되어야 하며 end()가 호출되기 전에 호출되어야 한다
    // 상태 코드와 응답헤더를 writeHead Method로 설정해주기
    res.writeHead(200, {
        // 응답을 text로 하기때문에 text/plain 설정
        'Content-Type': 'text/plain'
    });
    res.end('Hello world')
})

server.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})