'use.strict';

const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red',
    },
    makeTest: function () {
        console.log('test');
    }
};

console.log(options.name);
delete options.name;
console.log(options);

// get obj length
let counter = 0;
for (let key in options) {
    counter++;
    if (typeof options[key] === 'object') {
        for (let i in options[key]) {
            console.log(key, i, options[key][i]);
        }
    } else {
        console.log(key, options[key]);
    }
}
console.log(counter);
// get obj length
console.log(Object.keys(options).length);
// obj methods
options.makeTest();
// destructurizing
const {border, background} = options.colors;

console.log(border);