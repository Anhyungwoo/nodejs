const url=require('url');
const querystring=require('querystring');
const originUrl='http://yonggyo.com:60000/yonggyo/lecture/-/blob/master/2.%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/Node.js%EC%9D%98%20%EA%B8%B0%EC%B4%88%20%EB%B0%8F%20%ED%99%9C%EC%9A%A9/14.url/querystring.js'
const parsed=url.parse(originUrl);
// console.log(parsed);
const qs=querystring.parse(parsed.query); //객체
console.log('page', qs.page);
console.log('limit', qs.limit);


const newQs= {
	page:10,
	goodsNo:1000,
	category:'의류',	
};

const newQuery=querystring.stringify(newQs);
console.log('newQuery', newQuery);

//분해된 url 결합 - format

const formattedUrl=url.format(parsed);
console.log('formattedUrl', formattedUrl);