/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"*/

let numberOfFilms = prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privats: false
}

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

let count = personalMovieDB.count;

if (count < 10) {
    console.log('Quite a few movies have been watched');
} else if (count >= 10 && count <= 30) {
    console.log('You are a classic spectator');
} else if (count > 30) {
    console.log('Are you a movie fan');
} else {
    console.log('error!')
}

console.log(personalMovieDB);