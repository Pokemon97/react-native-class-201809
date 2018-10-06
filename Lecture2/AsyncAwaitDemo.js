async function demo(x) {
    //try{
        if (x == 1)
            return 1
        else 
             throw Error('123');
    // }catch(err){
    //       throw Error(err);
    // }
    
};
demo(1).then(rs => {
    console.log('success');
}).catch(err => {
    console.log('err',err);
});

demo(2).then(rs => {
    console.log('success');
}).catch(err => {
    console.log('err',err);
})