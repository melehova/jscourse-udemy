
'use strict';

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

start();
rememberMyMovies();
detectPersonalLevel();
writeYourGenres();
showMyDB();

function start() {
    while (numberOfFilms === '' || !numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many movies have you already watched?', '');
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Watched quite a few films');
    } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic spectator');
    } else if (personalMovieDB.count >= 30) {
        console.log('Are you a cinephile');
    } else {
        console.log('An error has occurred');
    }
}

function rememberMyMovies() {
    for (let i = 0; i < 2; i++) {
        const title = prompt('One of the last movies you watched?', ''), rate = prompt('How much would you rate it?', '');
        if (!title || !title.length || title.length >= 50 || !rate || !rate.length) {
            i--;
            continue;
        }
        personalMovieDB.movies[title] = +rate;
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) { console.log(personalMovieDB); }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres.push(prompt('Your favourite genre number ' + (i + 1), ''));       
    }
}
