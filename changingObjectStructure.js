const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" }
]
// we want this format:const pokemonModified = {
  charmander: { type: "fire" },
  squirtle: { type: "water" },
  bulbasaur: { type: "grass" }
};//

const getMapFromArray = data =>
  data.reduce((acc, item) => {
    // add object key to our object i.e. charmander: { type: 'water' }
    acc[item.name] = { type: item.type };
    return acc;
  }, {});
