// Тестовое сообщение
alert(1)

                // 1. Переменные

/*var name = 'Valerii'
name = 'Valya'*/
// camelCase
const firstName = 'Валерий'
const lastName = 'Осипов' //предпочтительно
let age = 41 //предпочтительно
const isBayanist = false

console.log(isBayanist)

                // 2. Мутирование

console.log('Имя человека: ' + firstName + '\nВозраст человека: ' + age.toString())
console.log(age)
//let middleName = prompt('Введите отчество:')
//console.log('Здравствуйте, ' + firstName + ' ' + lastName + ' ' + middleName + '!')

                // 3. Операторы

console.log(++age + ' ' +  age-- + ' ' + age + ' ' + age / 41)
age += -1
console.log(age)

                // 4. Типы данных

let x
console.log(typeof x)
console.log(null)

                // 5. Приоритет операторов (найти на MDN)

const fullAge = 29
const birthYear = 1986
const currentYear = 2022

const isFullAge = currentYear - birthYear >= fullAge // 36 >= 29 => false

                // 6. Условные операторы

const courseStatus = 'pending' // ready, fail, pending

if (courseStatus === 'ready') { //три равно - опеределяет и тип, а не только значение
    console.log('Курс уже готов, и его можно проходить')
} else if (courseStatus == 'pending') {
    console.log('Курс пока находится в процессе разработки')
} else {
    console.log('Курс не получился')
}

const isReady = true
if (isReady) {
    console.log('Всё готово')
} else {
    console.log('Всё не готово')
}

//Тернарные выражения:

isReady ? console.log('Всё готово (тернарно)') : console.log('Всё не готово (тернарно)')

//Логические операторы : И && ИЛИ || НЕ !


/*if (courseStatus == 'pending') {
    console.log('Курс пока находится в процессе разработки')
}*/

                // 7. Функции

function calculateAge (year) {
    return 2022 - year
}

function logInfoAbout (name, year) {
    const age = calculateAge(year)
    if (age > 0) {
        console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
    } else {
        console.log('Вообще - то это уже будущее')
    }
}

//logInfoAbout(prompt('Введите имя'), prompt('Введите год'))

                // 8. Массивы

const cars = ['Мерседес', 'Вольво', 'Форд'] //квадратные скобки
//const cars = new Array('Мерседес', 'Вольво', 'Форд') //старое решение
console.log(cars)

console.log(cars[1] + ' ' + cars[3] + ' ' + cars.length)

cars[0] = 'Porsche'
console.log(cars[0])

cars[3] = 'Seat'
console.log(cars[3])

cars[cars.length] = 'Fiat'
console.log(cars[cars.length-1])

                // 9. Циклы

//let s = cars[0]
//for (let i=1; i < cars.length; i++) {
//    s += ' ' + cars[i]
//}
//console.log(s)  //Старый способ обхода массива

for (let car of cars) {
    console.log(car)
}

                // 10. Объекты

const person = {
    firstName: 'Wladislaw',
    lastName: 'Pligovka',
    bornYear: 1986,
    languages: ['Ru', 'En', 'By'],
    hasWife: false,
    greet: function() {
        console.log('greet')
    }
} //фигурные скобки

console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true
console.log(person.hasWife)
person.isProgrammer = true
console.log(person.isProgrammer)

person.greet()
console.log(person.languages[2])
console.log(person.languages[1] === 'En')
