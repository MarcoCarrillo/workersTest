const { Worker } = require('worker_threads');

let nums = [21, 33, 15, 40, 42, 10];

//Buffer para controlar el acceso a la memoria
//Tamnaño
const size = Int32Array.BYTES_PER_ELEMENT * nums.length;
//Crear buffer 
const sharedBuffer = new SharedArrayBuffer(size);
const sharedArray = new Int32Array(sharedBuffer);

//Carrera de lectura-escritura para cuando hay muchos procesos administrarlos
//Atomic para que no choquen procesos
nums.forEach((num,index) => {
    Atomics.store(sharedArray, index, num);
});


//Nuevo worker
const worker = new Worker('./workersEjemplo2.js');

worker.on('error', error =>{
    console.log(error);
});

worker.on('message', result => {
    console.log(`El numero ${result.num} de la Serie Fibonnacci es ${result.fib}`);
});

worker.postMessage({ nums: sharedArray });

console.log('Proceso principal');