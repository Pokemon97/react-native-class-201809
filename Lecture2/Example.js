const showNum = () => {
console.log(i);
i = i + 1;
if(i<6) setTimeout(showNum, 1000);
}

let i=1;
showNum();