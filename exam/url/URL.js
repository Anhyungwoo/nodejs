// const url=require('url');
// console.log('URL', url.URL);

const {URL} =require('url');

const url=new URL('http://www.yonggyo.com/?page=3&limit=10&category=nodejs&category=javascript');
// console.log('url', url);
const searchParams=url.searchParams;
console.log(searchParams);
searchParams.append('filter', 'value1'); //추가
searchParams.append('filter', 'value2'); //추가
searchParams.append('filter', 'value3'); //추가
console.log('filter',searchParams.getAll('filter'));

searchParams.set('filter', 'value4');

// console.log('delete', searchParams.delete('filter')); //제거


console.log('url', searchParams.toString());
