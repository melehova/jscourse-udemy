'use.strict';

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    }
    return Array.from(str).reverse().join('');
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (!arr.length) {
        return 'Нет доступных валют';
    }
    let res = 'Доступные валюты:\n';
    for (let i in arr) {
        if (arr[i] !== missingCurr) {
            res += `${arr[i]}\n`;
        }
    }
    return res;
}

console.log(reverse(someString));
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));