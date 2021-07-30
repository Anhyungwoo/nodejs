const express=require('express');
const app=express(); //express 객체가 생성!!

// GET - / 라우터
//app.get("/", (req, res) => {
	/**
	req - Request
	res - Response
		.send(데이터) - 출력(res.write, res.end)
		.status(상태코드) - (http 모듈 - res.writhHead(상태코드))
	*/
	
	//return res.send("<h1>Express에서 출력...</h1>");
	
	
});

app.listen(3000, () => {
	console.log("3000번 포트에서 서버대기중...");
});