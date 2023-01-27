/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1
document.querySelectorAll('.promo__adv').forEach(ads => ads.remove());
// 2
document.querySelector('.promo__genre').innerText = 'драма';
// 3
document.querySelector('.promo__bg').style.backgroundImage = 'url(../img/bg.jpg)';
// 4
const ul = document.querySelector('ul.promo__interactive-list');
ul.querySelectorAll('li').forEach(li => li.remove());
movieDB.movies.sort().forEach((movie, idx) => {
    const li = document.createElement('li');
    li.classList.add('promo__interactive-item');
    // 5
    li.innerText = `${idx + 1}. ${movie}`;
    const div = document.createElement('div');
    div.classList.add('delete');
    li.append(div);
    ul.append(li);
});
