const arr1 = [
  { name: "Joe Brown", goals: 0, assists: 0, points: 0 },
  { name: "Jim Bob", goals: 2, assists: 1, points: 3 },
  { name: "Harry Styles", goals: 1, assists: 1, points: 2 },
  { name: "Craig Mack", goals: 5, assists: 7, points: 12 },
  { name: "Wés BÔS 🔥", goals: 5, assists: 7, points: 12 },
  { name: "DOG", bones: 100000, goals: 5, assists: 7, points: 12 },
];

const arr2 = [
  {
    name: "Craig Mack",
    goals: 3,
    assists: 3,
    points: 6,
    ppg: 0,
    ppa: 0,
    pims: 0,
  },
  { name: "Jim Bob", goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
  {
    name: "Joe Brown",
    goals: 0,
    assists: 0,
    points: 0,
    ppg: 0,
    ppa: 0,
    pims: 0,
  },
  {
    name: "Harry Styles",
    goals: 0,
    assists: 0,
    points: 0,
    ppg: 0,
    ppa: 0,
    pims: 0,
  },
];
function MergeArrays(...arrays) {
  const data = arrays.flat();
  const tally = data.reduce(function (total, current) {
    const { name, ...points } = current;
    console.log(`Working on ${name}`);
    console.log(Object.entries(points));

    total[name] = total[name] ?? {};
    Object.entries(points).forEach(([key, val]) => {
      if (total[name][key]) {
        total[name][key] = total[name][key] + val;
      } else total[name][key] = val;
    });
    return total;
  }, {});
  return tally;
}

const result = MergeArrays(arr1, arr2);
console.table(result);
