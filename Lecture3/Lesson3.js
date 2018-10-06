const nhanvien =[
{
    id: 1,
    ten: 'hoang',
    luong: 10000000,
    thuong: 500000,
    trocap: 1500000,
    chucvu: 'nhanvien'
	//12 000 000
  },
  {
    id: 6,
    ten: 'van anh',
    luong: 10000000,
    thuong: 500000,
    trocap: 1500000,
    chucvu: 'nhanvien'
	// 12 000 000
  },
  {
    id: 51,
    ten: 'nhi',
    luong: 5000000,
    thuong: 100000,
    trocap: 100000,
    chucvu: 'nhanvien'
	// 5 200 000
  },
  {
    id: 14,
    ten: 'an',
    luong: 14000000,
    thuong: 400000,
    trocap: 2500000,
    chucvu: 'nhanvien'
	// 16 900 000
  },
  {
    id: 11,
    ten: 'tuan anh',
    luong: 20000000,
    thuong: 1100000,
    trocap: 4500000,
    chucvu: 'giamdoc'
  }
];
//console.log(nhanvien);

(()=> {
	let sum = nhanvien.reduce((total,item)=> {
			return item.chucvu == 'nhanvien' ? 
						total + ( parseFloat(item.luong)+ parseFloat(item.thuong) + parseFloat(item.trocap)) 
						: total;
	},0)
	console.log(sum);
	//console.log(sum);
})();