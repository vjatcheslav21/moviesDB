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

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Quite a few movies have been watched');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('You are a classic spectator');
        } else if (personalMovieDB.count > 30) {
            console.log('Are you a movie fan');
        } else {
            console.log('error!')
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }, 
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`What is your number ${i} favorite genre?`, '');
            if (genre === '' || genre === null) {
                console.log('Error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
}
