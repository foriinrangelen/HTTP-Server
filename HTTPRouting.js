// 서버에서 클라이언트로 텍스트를 보내는 것이 아닌 자바스크립트 객체(JSON)을 보내려면?

const http= require('http');
// 포트 설정
const port= 4001;
const targetobject= {a:"a",b:"b"};
const server= http.createServer((req, res)=>{

    // POST /home 요청시
    if(req.method==='POST'&& req.url==='/home'){
        // req.on() Method로 POST 요청 Body를 가져올 수있음
        // data라는 이름으로 받고 Callback실행
        req.on('data', ()=> {
            console.log(data) // 넘어온데이터 확인, Buffer 형태로 넘어옴
            const stringfiedData= data.toString(); // Buffer toString()으로 재조합하기
            console.log(stringfiedData); // 재조합된 데이터 확인
            // JSON.parse() => 문자열 형태의 JSON 데이터를 객체로 변환
            // Object.assign(a, b) => a객체에 b객체를 복사해서 속성 합치기(동일 프로퍼티는 2번째 매개변수 객체로 초기화
            Object.assign(targetobject, JSON.parse(stringfiedData));
        })
    }

    // GET /home 요청시
    if(req.url==='/home') {
        // writeHead코드는 한 번만 호출되어야 하며 end()가 호출되기 전에 호출되어야 한다
        // 상태 코드와 응답헤더를 writeHead Method로 설정해주기
        res.writeHead(200, {
            // 응답을 JSON으로 하기때문에 'Content-Type': 'application/json' 설정
            'Content-Type': 'application/json'
        });
        // res.end() Method에는 문자열이 들어가야 하기때문에 JSON.stringify() 사용
        res.end(JSON.stringify(targetobject));    
    }
    // /about 요청일시
    else if(req.url==='/about'){
        // 한번 writeHeader를 호출했으면 setHeader를 사용해야한다
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>About Page</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    // 요청이 올바르지않다면(요청url에 리소스가 존재하지 않을시)
    else {
        res.statusCode=404;
        res.end('404 NOT FOUND');
    }
})

server.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});