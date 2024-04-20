// 서버에서 클라이언트로 텍스트를 보내는 것이 아닌 자바스크립트 객체(JSON)을 보내려면?

const http= require('http');
// 포트 설정
const port= 4001;
const server= http.createServer((req, res)=>{
    // writeHead코드는 한 번만 호출되어야 하며 end()가 호출되기 전에 호출되어야 한다
    // 상태 코드와 응답헤더를 writeHead Method로 설정해주기
    res.writeHead(200, {
        // 응답을 JSON으로 하기때문에 'Content-Type': 'application/json' 설정
        'Content-Type': 'application/json'
    });
    // res.end() Method에는 문자열이 들어가야 하기때문에 JSON.stringify() 사용
    res.end(JSON.stringify({
        a:"a",
        b:"b"
    }));
})

server.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})