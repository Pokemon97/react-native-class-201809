const students = [
	{
		id:1,
		name:'hoang',
		status:true
	},
	{
		id:2,
		name:'minh',
		status:false
	},
	{
		id:3,
		name:'tung',
		status:true
	}
];

const getName = (item) =>{
	return item.name;
}

function getNameOfArr() {
	console.log(students.map(getName));
}

(()=>{
	//const arr2 =students.map(item => item.name).filter( item => item.status );
	console.log(students.filter( item => item.status).map(item => item.name));
})();
//getNameWithStatusOfArr();