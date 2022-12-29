
'use strict';

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let numberOfFilms;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (this.count === '' || !this.count || isNaN(this.count)) {
            this.count = +prompt('How many movies have you already watched?', '');
        }
    },
    rememberMyMovies: function() {
        for (let i = 0; i < 2; i++) {
            const title = prompt('One of the last movies you watched?', ''), rate = prompt('How much would you rate it?', '');
            if (!title || !title.length || title.length >= 50 || !rate || !rate.length) {
                i--;
                continue;
            }
            this.movies[title] = +rate;
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log('Watched quite a few films');
        } else if (this >= 10 && this.count < 30) {
            console.log('You are a classic spectator');
        } else if (this.count >= 30) {
            console.log('Are you a cinephile');
        } else {
            console.log('An error has occurred');
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const input = prompt('Your favourite genre number ' + (i + 1), '');
            if (!input || !input.length) {
                i--;
                continue;
            }
            this.genres.push(input);
        }
        this.genres.forEach((genre,idx) => {
            console.log(`Любимый жанр ${idx + 1} - это ${genre}`);
        });
    },
    showMyDB: function() {
        if (!this.privat) { console.log(this); }
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyMovies();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
