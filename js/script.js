'use.strict';

const soldier = {
    health: 400,
    armor: 100,
    sayHello: () => {
        console.log('Hello');
    }
};

const john0 = {
    health: 100,
};
// old format deprecated!
// john.__proto__ = soldier;

//                    to     from
Object.setPrototypeOf(john0, soldier);

const john = Object.create(soldier);
console.log(john);
john.sayHello();

