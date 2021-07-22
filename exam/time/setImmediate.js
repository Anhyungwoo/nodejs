const timeout=setTimeout(() => {
	console.log('지연실행');
}, 5000);

clearTimeout(timeout);
const interval=setInterval(() => {
	console.log('지연반복실행')
	
}, 1000);

setTimeout(() => {
	cleartInterval(interval);
}, 5000);

setImmediate(() => {
	console.log('비동기즉시 실행');
	//setTimeout(function(){},0);
});