
function isSqrtInt(x) {
	return  Number.isInteger(Math.sqrt(x));
}

const fibonanci = (n) => {
	return isSqrtInt(5*Math.pow(n,2)-4) || isSqrtInt(5*Math.pow(n,2)+4);
}

/* es5
module.exports = fibonanci;
*/

//es 6 - arrow function
module.exports = fibonanci;