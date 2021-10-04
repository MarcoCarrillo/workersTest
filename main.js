const { Worker } = require('worker_threads');

let num = 42;

//Crear el nuevo hilo (worker)
const worker = new Worker('./workersEjemplo.js', { workerData: { num: num }} );

worker.once('message', result =>{
    console.log(`El numero ${num} de la Serie Fibonnacci es ${result}`);
});

worker.on('error', error =>{
    console.log(error);
});

worker.on('exit', exitCode =>{
    console.log(`La salida del worker tiene un codigo: ${exitCode}`);
});

console.log('Aqui esta el proceso principal');
