const childprocess=require('child_process');

const result=childProcess.exec('dir');

result.stdout.on('data',(data) => {
	console.log(data);
});

result.stderr.on('data', (data) => {
	console.log(data);
});

result.stderr.on('data', (data) => {
	console.log(data.toString());
});