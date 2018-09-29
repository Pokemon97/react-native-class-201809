class Queue {
	/*
	co the khai bao prop nhu the nay 
	name:string;
	*/
	//ko su dung dc nhieu constructor
	constructor(){
		this.arr = [];
		this.first = 0;
	}
	/*
		get name() {
			return this.name;
		}
		set name() {
		}
	*/
	enqueue (value) {
		this.arr.push(value);
	}
	dequeue () {
		if(this.first <= this.arr.length)
			return this.arr[this.first++];
	}
}

module.exports = Queue;