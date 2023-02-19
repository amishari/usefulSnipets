arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a']
arr.reduce((prev, cur)=>{
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
