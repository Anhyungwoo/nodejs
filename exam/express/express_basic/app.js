const express = require('express');
const app = express(); //app 객체
app.set(PORT, 8000);

app.get("/", (req, res) => {
	return res.status(200).send('<h1>Express에서 출력</h1>');
});

app. get("/test", (req, res, next) => {
	console.log('0번째 미들웨어');
	next();
});

app.get("/test", (req, res, next) => {
	console.log('1번째 미들웨어');
	next();
}, (req, res, next) => {
	console.log('2번째 미들웨어');
	next();
}, (req, res) => {
	console.log('3번째 미들웨어');
	return res.send("/test 라우터");
});

//use 로 등록된 미들웨어 - 가장 하단에 있다면?
app.use((req, res, next) => {
	//return res.send('<h1>가장 하단에 있는 모든 요청 처리 라우터</h1>');
	return res.status(404).send('현재 접속한' + req.url + "은 없는 페이지 입니다...");
});


app.listen(3000, () => {
	console.log("3000번 포트에서 서버 대기중..");
});