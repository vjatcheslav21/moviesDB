/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   a = prompt('What movie did you watch last?', '');
                b = +prompt("What rating will you give?", "");
    
                if (a != null && b != null && a != '' && b != '' & a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done!');
                } else {
                    console.log('error!');
                    i--;
                }
    }
}
// rememberMyFilms();


let count = personalMovieDB.count;

function detectedPersonalLevel() {
    if (count < 10) {
        console.log('Quite a few movies have been watched');
    } else if (count >= 10 && count <= 30) {
        console.log('You are a classic spectator');
    } else if (count > 30) {
        console.log('Are you a movie fan');
    } else {
        console.log('error!')
    }
}
// detectedPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`What is your number ${i} favorite genre?`, '');
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();