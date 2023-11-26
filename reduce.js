// Reverse reduce reverse
let vals = [88, 28, 0, 9, 389, 420];
vals.reduce((total, next) => {return [next, ...total]}, []);

'aspercost'.split('').reduce((total, next) => {return [next, ...total]}, []).join('')
/* or*/
[...'aspercost'].reduce((a,v)=>v+a)

//#groupedBy  group objects by property
let users = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 52, occupation: 'gardener' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 46, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 32, occupation: 'driver' }
];

users.reduce((acc,item)=>{
    acc[item.occupation] = acc[item.occupation] ?? []
    acc[item.occupation].push(item)
    return acc
    
},{})

//# convert array to object
let users = [
  { id: 1, name: 'John', age: 25, occupation: 'gardener' },
  { id: 2, name: 'Lenny', age: 51, occupation: 'programmer' },
  { id: 3, name: 'Andrew', age: 43, occupation: 'teacher' },
  { id: 4, name: 'Peter', age: 52, occupation: 'gardener' },
  { id: 5, name: 'Anna', age: 43, occupation: 'teacher' },
  { id: 6, name: 'Albert', age: 46, occupation: 'programmer' },
  { id: 7, name: 'Adam', age: 47, occupation: 'teacher' },
  { id: 8, ame: 'Robert', age: 32, occupation: 'driver' }
];
users.reduce((acc,val)=>{
    const {name,...rest}=val;
    return {...acc, [name]:rest}
} ,{})

//Counting items  count occurrences
const words = ['sky', 'forest', 'wood', 'sky', 'rock', 'cloud', 
    'sky', 'forest', 'rock', 'sky'];
words.reduce((acc,init)=>{
    acc[init] = acc[init] ?? 0
    acc[init] +=1
    return acc
},{})

// Binary to decimal 
const bin2dec = str=>[...String(str)].reduce((acc,cur)=>+cur+acc*2,0)
// Long format for readability
const bin2dec = (str) => {
  return [...String(str)].reduce((acc,cur)=>{
    return +cur+acc*2
  },0)
}

//currying and function composition   https://zetcode.com/javascript/currying/
const double = x => x * 2
const triple = x => x * 3
const quadruple = x => x * 4

const pipe = (...funs) => input => funs.reduce(
    (total, fn) => fn(total),
    input
)

const fun1 = pipe(double)
const fun2 = pipe(double, triple)
const fun3 = pipe(triple, triple)
const fun4 = pipe(double, triple, quadruple)

console.log(fun1(2))
console.log(fun2(5))
console.log(fun3(7))
console.log(fun4(9))


// https://zetcode.com/javascript/reduce/
