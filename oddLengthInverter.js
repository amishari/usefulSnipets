const oddLengthInverter = (str) => {
  word = str.trim().split("");
  return word.length % 2
    ? word.reverse().join("")
    : console.log("It has even letters!");
};
