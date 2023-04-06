//by reduce
renameKeys = (keysMap, obj) => {
	Object.keys(obj).reduce(
		(acc, key) => ({
			...acc,
			...{ [keysMap[key] || key]: obj[key] },
		}),
		{}
	);
};
const obj = { oldKey1: "value1", oldKey2: "value2", another: "1" };

const keysMap = { oldKey1: "newKey1", oldKey2: "newKey2" };

// {newKey1: 'value1', newKey2: 'value2', another: '1'}
//-----------------------------------------
// By map
function renameKeys(obj, newKeys) {
	const entries = Object.keys(obj).map((key) => {
		const newKey = newKeys[key] || key;

		return { [newKey]: obj[key] };
	});

	return Object.assign({}, ...entries);
}

const obj = { oldKey1: "value1", oldKey2: "value2", another: "1" };

const newKeys = { oldKey1: "newKey1", oldKey2: "newKey2" };
