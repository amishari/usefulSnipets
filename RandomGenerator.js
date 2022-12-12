const Randgenerator = (n) =>{
    let arr = [];
    for(i=0;i<n;i++){
        arr.unshift((Math.floor(Math.random()*100)));
        
    };
    return arr
}
