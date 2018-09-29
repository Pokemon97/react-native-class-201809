
class Queue {
	let  q ;
	let offset;
	
	constructor(){
		q = [];
		offet = 0;
		
	}
	function gerLength(){
		return (q.length - offset);		
	}
	
	function enqueue(item) {
		q.push(item);
	}
	
	function dequeue(){
		if (q.length == 0) return undefined;
		var item = q[offset];
		if (++ offset * 2 >= q.length ){
			q = queue.slice(offset);
			offset = 0;
		}
		return 0;
	}
}
module.exports = {Queue as default};