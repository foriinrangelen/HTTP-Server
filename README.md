### CreateServer 메소드
- `http.createServer(requestListener)` 메소드는 server 객체를 생성

### server 객체
- 서버객체는 컴퓨터의 포트를 수신하고 요청이 들어올 때마다 requestListener라는 함수를 실행할 수 있음
- server 객체는 EventEmitter를 기반으로 만들어졌으며 EventEmitter는 어떠한 이벤트가 발생했을 때 특정 Callback을 실행시킨다
- `http.createServer((req, res)=>{})`안에서 말고 `server.on('request', 콜백함수)`, `server.on('connection', 콜백함수)`etc.. 같이 사용가능
``` javascript
// 예시
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(8080);
```
  
  `server.listen()` => 서버실행
  
  `server.close()`=> 서버종료

### RequestListener 함수( http.createServer 메소드의 매개변수)
- requestListender는 서버가 요청을 받을 때마다 호출되는 함수
- requestListender함수는 사용자의 요청과 사용자에 대한 응답을 처리

### req, res
