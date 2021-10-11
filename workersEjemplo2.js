const { parentPort } = require('worker_threads');

parentPort.on('message', data => {
    data.nums.forEach(numero =>{
        parentPort.postMessage( {num: numero, fib: getFibonacci(numero)} );
    });
});

function getFibonacci(num) {
    if(num === 0){
        return 0;
    }else if(num === 1){
        return 1;
    }else{
        return getFibonacci(num - 1) + getFibonacci(num - 2);
    }
}