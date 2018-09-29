const PI = require('./pi');
const fibo = require('./fibonanci');
const Queue = require('./queue');
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());