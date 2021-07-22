// process.version

console.log('version',process.version) //Node.js의 버전
console.log('arch', process.arch); //프로세스의 아키텍쳐 정보
console.log('platform' process.platform); //운영체제의 플랫폼(win32, linux...)
console.log('uptime', process.uptime());  //프로세스가 시작된 후 흐른 시간
console.log('execPath', process.execPath); //실행중인 node의 경로
console.log('cwd', process.cwd()); //현재 프로세스가 실행되는 위치
console.log('cpuUsage', process.cpuUsage()); //CPU 사용량
