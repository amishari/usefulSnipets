str.split("").reduce((acc, item, index) => {
  return { ...acc, [item]: [...(acc[item] || []), index] };
}, {});
