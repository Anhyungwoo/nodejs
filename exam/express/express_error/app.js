const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan'); // morgan 미들웨이 -> 모든 요청에 대해서 로그가 출력
const path=require('path');
const app=express();

dotenv.config(); // .env -> process.env 하위 속성

//app.use(morgan('dev')); // dev, combined, common, short, tiny
app.use(morgan('combined'));
app.set('PORT', process.env.PORT || 3000);

app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.use((req, res, next) => {
	console.log('공통 라우터');
	next();
});

app.get("/", (req, res, next) => {
	/* 1.Error 생성자에서 객체를 생성하여 throw
	   2. next 함수에 에러 객체를 담아서 호출 -> 에러 처리 라우터로 전달
	 */
	 
	const err=new Error("404 is not found");
	throw err; //에러처리 라우터 이동
	netx(err); //-> error 객체가 인수로 있으면 -> 에러처리 미들웨어 이동
	
	
	
	return res.send("메인페이지");
});

//없는 페이지 처리 라우터
app.use((req, res, next) => {
	//return res.status(404).send(`${req.url}은 없는 페이지 입니당.`);
	const err = new Error(`${req.url} 는없음ㅋㅋ `);
	err.status=404;
	err.addText="추가 메세지";
	next(err); //오류 처리 미들웨어 전달
});

//오류처리 라우터
app.use((err, req, res, next) => { //인수가 4개 -> 첫번째 인수가 에러 객체
	
	return res.status(err.status || 500).send(err.message);
});

app.listen(app.get('PORT'), () => {
	console.log(app.get('PORT'), '에서 서버 대기중...')
});