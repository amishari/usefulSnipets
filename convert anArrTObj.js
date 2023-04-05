//We can use .reduce() to convert an array to a POJO. This can be handy if you need to do lookups of some sort'
const peopleArr = [
  {
    username: "glestrade",
    displayname: "Inspector Lestrade",
    email: "glestrade@met.police.uk",
    authHash: "bdbf9920f42242defd9a7f76451f4f1d",
    lastSeen: "2019-05-13T11:07:22+00:00",
  },
  {
    username: "mholmes",
    displayname: "Mycroft Holmes",
    email: "mholmes@gov.uk",
    authHash: "b4d04ad5c4c6483cfea030ff4e7c70bc",
    lastSeen: "2019-05-10T11:21:36+00:00",
  },
  {
    username: "iadler",
    displayname: "Irene Adler",
    email: null,
    authHash: "319d55944f13760af0a07bf24bd1de28",
    lastSeen: "2019-05-17T11:12:12+00:00",
  },
];

//it might be convenient to look up user details by their username. To make that easier, we can convert our array to an object

function keyByUsernameReducer(acc, person) {
  return { ...acc, [person.username]: person };
}
const peopleObj = peopleArr.reduce(keyByUsernameReducer, {});
console.log(peopleObj);

// Now the username as part of the object, now how to remove this new keys from modified obj?

const rename_keys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
//Above is the func for removing. Now let's prepare args:

let keys = Object.keys(peopleObj);
let keysMap = Object.assign({}, keys); // new obj made from keys(array){0: 'glestrade',...}

// now we should swap key and value
const keyValueInverter = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
};

//almost done. Calling the function:
const preObj = rename_keys(keyValueInverter(keysMap), peopleObj);
console.log(preObj);
