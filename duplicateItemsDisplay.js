const DuplicateDisplay =(array) =>{
    array.filter((item,index)=>{
        index !== array.indexOf(item)});
    return array;}
