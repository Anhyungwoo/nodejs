const http=require('http');
const fs=require('fs').promise;

http.createServer (async (req, res) => {
	try {
	const data = await fs.readFile('./index.html');
	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	//res.end(data);
	//return;
	return res.end(data);
	} catch(err) {
		res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
		//res.end('<h1>' + err.message + '</h1>');
		//return;
		return res ('<h1>' + err.message + '</h1>');
	}
	
	res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
	res.end('헤더 출력 테스트');
})

.listen(8000, () => {
	console.log('8000번 포트에서 서버 대기중..');
});

/* Promise
http.createServer((req,res) => {
	fs.readFile('./index.html')
		.then((data)=> {
			res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
			res.end(data);
		})
		.catch((err)=>{
			res.writeHead(500, {'Content-Type' : 'text/html; charset=utf-8'});
			res.end('<h1>' + err.message + '</h1>');
		});
})
.listen(8000, () => {
	console.log('8000번 포트에서 서버 접속중..');
});
*/