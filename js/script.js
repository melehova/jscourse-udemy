'use.strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    return arr.length ? `Семья состоит из: ${arr.join(' ')}` : 'Семья пуста';
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(element => {
        console.log(element.toLowerCase());
    });
}

console.log(showFamily([]));
standardizeStrings(favoriteCities);