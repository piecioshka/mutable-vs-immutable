const QUANTITY = 1000;

function produceContent(list, range) {
    for (let i = 0; i < range; ++i) {
        list.push({
            name: 'empty',
            surname: 'empty',
            age: i,
            children: new Array(i).map(i => {
                return {
                    name: 'example-' + i,
                    surname: 'example-' + i * 5
                }
            })
        });
    }
    return list;
}

function deepEqual(item1, item2) {
    if (Array.isArray(item1)) {
        return item1.every((elm1, index) => {
            return deepEqual(elm1, item2[index]);
        });
    }

    if (typeof item1 === 'object') {
        return Object.keys(item1).every((keyName) => {
            return deepEqual(item1[keyName], item2[keyName]);
        })
    }

    return item1 === item2;
}

// -----------------------------------------------------------------------------

class CustomArray extends Array {
    constructor(...args) {
        super(...args);
    }
}

class MutableArray extends CustomArray {
    compare(array) {
        return this.every((element, index) => {
            return deepEqual(array[index], element);
        });
    }
}

class ImmutableArray extends CustomArray {
    constructor(...args) {
        super(...args);
        this._id = Math.random();
    }

    compare(list) {
        return this._id === list._id;
    }
}

let mutableList = produceContent(new MutableArray, QUANTITY);
let mutableList2 = produceContent(new MutableArray, QUANTITY);

console.time('Compare mutable list');
console.log('isTheSameMutableList', mutableList.compare(mutableList2));
console.timeEnd('Compare mutable list');

// -----------------------------------------------------------------------------

let immutableList = produceContent(new ImmutableArray, QUANTITY);
let immutableList2 = produceContent(new ImmutableArray, QUANTITY);

console.time('Create immutable list');
console.log('isTheSameImmutableList', immutableList.compare(immutableList2));
console.timeEnd('Create immutable list');
