const A=require('./A');
global.message='전역 변수 global에 값 지정 테스트';
//A();

console.log('함수밖',  this===module.exports);

function globalScope() {
	console.log('함수안', this===global);
}