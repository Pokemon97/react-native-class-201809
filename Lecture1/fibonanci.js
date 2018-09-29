

function isSqrtInt(x) {
	return  Number.isInteger(Math.sqrt(x));
}

function fibonanci(n) {
	return isSqrtInt(5*Math.pow(n,2)-4) || isSqrtInt(5*Math.pow(n,2)+4);
}

console.log(fibonanci(1));
console.log(fibonanci(2));
console.log(fibonanci(3));
console.log(fibonanci(4));