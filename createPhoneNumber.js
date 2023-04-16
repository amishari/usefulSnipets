function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  
  for(let i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
// 2

number  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
num = number.join('')
`(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6,10)}`
