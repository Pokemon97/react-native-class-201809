//Các tham số chạy đồng thời, nhưng xét timeout với i nên sẽ ra kết quả ở các khoảng thời gian tương ứng là 1s
 for(let i = 1; i < 6; i++) {
    setTimeout(()=>{
       console.log(i);     
    },i * 1000);
 }

