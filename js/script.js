'use.strict';

const restorantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$'
    },
    {
      name: 'Pizza Diavola',
      price: '9$'
    },
    {
      name: 'Beefsteak',
      price: '17$'
    },
    {
      name: 'Napoleon',
      price: '7$'
    }
  ],
  waitors: [
    { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
  ],
  averageLunchPrice: '20$',
  openNow: true
};

const isOpen = prop => prop ? 'Открыто' : 'Закрыто';

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average) {
    return 'Цена ниже средней';
  } else {
    return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
  const copy = JSON.parse(JSON.stringify(data));

  copy.waitors[0] = { name: 'Mike', age: 32 };
  return copy;
}

let newRest = transferWaitors(restorantData);
console.log(restorantData);
console.log(newRest);