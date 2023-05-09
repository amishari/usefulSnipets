const maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};
let sortted_key = Object.entries(maxSpeed).sort()
let sorted_value = Object.entries(maxSpeed).sort(([,a],[,b])=>a - b)

// 
let personnel = [   
    {
        name: 'Diana',
        born: 1373925600000, // Mon, Jul 15 2013
        num: 4,
        sex: 'female'
    },
    {

        name: 'Beyonce',
        born: 1366832953000, // Wed, Apr 24 2013
        num: 2,
        sex: 'female'
    },
    {            
        name: 'Albert',
        born: 1370288700000, // Mon, Jun 3 2013
        num: 3,
        sex: 'male'
    },    
    {
        name: 'Doris',
        born: 1354412087000, // Sat, Dec 1 2012
        num: 1,
        sex: 'female'
    }
];

let byDate = personnel.sort((a,b)=> a.born - b.born);

let byName = personnel.sort((a, b) => {
	let x = a.name.toLowerCase();
	let y = b.name.toLowerCase();
	return x < y ? -1 : x > y ? 1 : 0;
});
