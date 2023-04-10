const scores = [90, 30, 20, 70, 85, 95, 0, 55, 60, 50];
// simplest 
Math.min(...scores);
Math.max(...scores);
// with reduce
score.reduce((acc, item)=> acc<item ? acc:item) //min; 
score.reduce((acc, item)=> acc>item ? acc:item) //max
             

             
