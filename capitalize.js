const capitalize = (str) => {
  let words = [];
  for (const word of str.split(" ")) {
    words.push(`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  }
  return words.join(" ");
};
