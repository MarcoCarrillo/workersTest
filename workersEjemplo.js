const { parentPort, workerData} = require('worker_threads');

parentPort.postMessage( getFibonacci(workerData.num));

function getFibonacci(num) {
    if(num === 0){
        return 0;
    }else if(num === 1){
        return 1;
    }else{
        return getFibonacci(num - 1) + getFibonacci(num - 2);
    }
}