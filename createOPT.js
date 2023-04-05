const token = () => {
  const digits = "0123456789";
  const letters = "aAfFuUiIkyTQb";
  // const letters = /^[0-9-\u0600-\u06FF\s]+$/
  let OPT,
    OPT1,
    OPT2 = "";
  for (let index = 0; index < 3; index++) {
    OPT1 += digits[Math.floor(Math.random() * 10)];
  }
  // return OPT1;

  for (let index = 0; index < 3; index++) {
    OPT2 += digits[Math.floor(Math.random() * 10)];
  }
  return (OPT = OPT1 + OPT2);
};
