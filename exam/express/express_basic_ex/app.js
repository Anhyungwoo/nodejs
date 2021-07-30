const express = require('express');
const app = express();
app.set('PORT', 3000);


app.use((req, res, next) => {
	console.log('공통 라우터');
	next();
});

// join
app.get('/join' (req, res) => {
	return res.send('/join 페이지');
});

// login
app.get('/login', (req, res) => {
	return res.send('/login 페이지');
});

// 없는 페이지 처리 라우터 - 모든 요청에 대응하는 라우터가 가장 하단에 있는 경우
app.use((req, res, next) => {
	return res.status(404).send(`${req.url}은 없는 페이지 입니다.`);
});


app.listen(app.get('PORT'), () => {
	console.log(app.get('PORT'), "번 포트에서 서버 대기중..");
});