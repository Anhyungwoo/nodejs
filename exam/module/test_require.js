//const odd=require('test_module.js'); //내장 모듈 또는 외부설치모듈(node_modules)
//const odd=require("./test_module.js");

//const odd=require('./member/index.js');

//const odd=require('./member');
//console.log("odd", odd);
/*
const sum=require('./test_module');
const result=sum(3,5);
console.log('sum', sum);
console.log('result', result);*/
/*
const member=require('./test_module');
member.login();
member.logout();
member.join();
member.update();
*/
const{login, logout, join, update}=require('./test_module');
login();
logout();
join();
update();