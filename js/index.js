//-----------------------------------------------------------------------------Секунды в часы и минуты
function translateOfTime() {

    var seconds = prompt('введите количество секунд');
    var hours = Math.floor(seconds / 60 / 60);
    var minutes = Math.floor(seconds / 60) - (hours * 60);
    var retrosek = Math.floor(seconds % 60);
    alert(hours + ' hours ' + minutes + ' minutes ' + retrosek + ' seconds ');
}

const btnTime = document.querySelector('.time');
btnTime.addEventListener('click', translateOfTime);

//-----------------------------------------------------------------------------Поклейка комнаты
function wallpaperGluing() {

    var roomHeight = prompt('введите высоту комнаты (м)');
    var roomWidth = prompt('введите ширину комнаты (м)');
    var roomLength = prompt('введите длину комнаты (м)');
    var numberOfWindows = prompt('введите количество окон');
    var windowWidth = prompt('введите ширину окна (м)');
    var windowHeight = prompt('введите высоту окна (м)');
    var doorWidth = prompt('введите ширину двери (м)');
    var doorHeight = prompt('введите высоту двери (м)');
    var rollLenght = prompt('введите длину рулона (м)');
    var rollWidth = prompt('введите ширину рулона (м)');
    var perimetrRoom = (roomLength * roomWidth) * 2;
    var perimetrWindow = ((windowWidth * windowHeight) * 2) * numberOfWindows;
    var perimetrDoor = (doorWidth * doorHeight) * 2;
    var resultOfPerimetrRoom = (perimetrRoom - (perimetrWindow + perimetrDoor));
    var numberOfSheetsPerRoll = (rollLenght / roomHeight);
    var resultOfRollWallpaper = (resultOfPerimetrRoom / rollWidth / numberOfSheetsPerRoll);
    alert(resultOfRollWallpaper + ' rolls');
}

const btnRoom = document.querySelector('.room');
btnRoom.addEventListener('click', wallpaperGluing);

//--------------------------------------------------------------------------------------------Максимальное из введенных чисел 
function maxNumber() {

    var num = prompt('Введите цифры через запятую');
    var arr = num.split(',');
    arr.sort((a, b) => a - b);
    alert('Наибольшее число: ' + arr.slice(-1));
}

const btnNumber = document.querySelector('.number');
btnNumber.addEventListener('click', maxNumber);

//--------------------------------------------------------------------------------------------Тест
function test() {

    var result = 0;
    const POINTS_COEF = 1.2;
    const library = [
        { q: 'Сколько будет 10+10 ? : \n 1 - 10 \n 2 - 5 \n 3 - 20', a: 3 },
        { q: 'Сколько будет 10+9 ? : \n 1 - 19 \n 2 - 8 \n 3 - 4', a: 1 },
        { q: 'Сколько будет 10+8 ? : \n 1 - 17 \n 2 - 18 \n 3 - 19', a: 2 },
        { q: 'Сколько будет 10+7 ? : \n 1 - 55 \n 2 - 77 \n 3 - 17', a: 3 },
        { q: 'Сколько будет 10+6 ? : \n 1 - 16 \n 2 - 25 \n 3 - 8', a: 1 },
        { q: 'Сколько будет 10+5 ? : \n 1 - 16 \n 2 - 88 \n 3 - 15', a: 3 },
        { q: 'Сколько будет 10+4 ? : \n 1 - 99 \n 2 - 14 \n 3 - 2', a: 2 },
        { q: 'Сколько будет 10+3 ? : \n 1 - 79 \n 2 - 15 \n 3 - 13', a: 3 },
        { q: 'Сколько будет 10+2 ? : \n 1 - 12 \n 2 - 7 \n 3 - 0', a: 1 },
        { q: 'Сколько будет 10+1 ? : \n 1 - 0 \n 2 - 11 \n 3 - 9', a: 2 },
    ];

    library.map(function (obj) {
        var question = obj.q;
        var correct_answer = obj.a;
        var answer = prompt(question);

        while (answer > 3) {
            answer = prompt(question);
        }

        if (answer == correct_answer) {
            result++;
        }
    })

    var resulPoints = Math.floor(POINTS_COEF * result);                     // 5 ответов = 5 балов!  балов > 5  = бал++
    alert('Вы правильно ответили на: ' + result + ' из 10 опросов.' + '\n' + 'Ваша оценка: ' + resulPoints + ' из 12 балов')
}

const btnTest = document.querySelector('.test');
btnTest.addEventListener('click', test);


//--------------------------------------------------------------------------------------------Проверка даты 
function dateCheck() {

    var yearMonthDay = prompt('Введите дату DD.MM.YYYY');
    var arr = yearMonthDay.split('.');
    var day = arr[0];
    var month = arr[1];
    var year = arr[2];
    arr[1] -= 1;
    var d = new Date(arr[2], arr[1], arr[0]);
    if ((d.getFullYear() == arr[2]) && (d.getMonth() == arr[1]) && (d.getDate() == arr[0])) {
        if ((year % 400 == 0 || year % 100 != 0) && (year % 4 == 0)) {
            alert(' Год высокосный ')
        } else {
            alert(' Год не высокосный ')
        }
    } else {
        alert("Введена некорректная дата!");
    }
}

const btnDate = document.querySelector('.date');
btnDate.addEventListener('click', dateCheck);

//--------------------------------------------------------------------------------------------Линейное уравнение 
function lEquation() {

    var a = prompt('Введите значение ( a )  для линейного уровнения ax+b=0');
    var b = prompt('Введите значение ( b ) для линейного уровнения ax+b=0');
    if ((a == 0 && b == 0) || (a == 0 && b !== 0)) {
        alert('Уравнение не имеет корней');
    } else {
        alert('x= ' + (-b / a));
    }
}

const btnLinear = document.querySelector('.linearEquation');
btnLinear.addEventListener('click', lEquation);


//--------------------------------------------------------------------------------------------Квадратное уравнение 
function qEquation() {

    var a = prompt('Введите значение ( a )  для квадратного уровнения ax^2+bx+c=0');
    var b = prompt('Введите значение ( b ) для квадратного уровнения ax^2+bx+c=0');
    var c = prompt('Введите значение ( c ) для квадратного уровнения ax^2+bx+c=0');
    const D = Math.pow(b, 2) - (4 * a * c);
    console.log(D);
    if (D < 0) {
        alert('Корней нет');
    } else if (D == 0) {
        alert('x= ' + (-b + Math.sqrt(D)) / (2 * a));
    } else if (D > 0) {
        alert('x1= ' + (-b + Math.sqrt(D)) / (2 * a));
        alert('x2= ' + (-b - Math.sqrt(D)) / (2 * a));
    }
}

const btnQuadratic = document.querySelector('.quadraticEquation');
btnQuadratic.addEventListener('click', qEquation);



//-------------------------------------------------------------------------------------------- Жалюзи
function blindsCalculation() {

    const PLASTIC = 200;
    const TEXTILE = 250;
    const ALUMINIUM = 350;

    var blindsHeight = prompt('Введите высоту жалюзей (см)');
    var blindsWidth = prompt('Введите ширину жалюзей (см)');
    var material = prompt('Материал: \n 1-Пластик \n 2-Текстиль \n 3-Алюминий');
    var areaBlinds = (blindsHeight * blindsWidth) / 10000;
    if (material == 1) {
        var amountToPay = (areaBlinds * PLASTIC);
        alert('Цена за кв.м: ' + PLASTIC + ' грн' + '\n' + 'Площадь: ' + areaBlinds + ' кв.м.' + '\n' + 'К оплате: ' + amountToPay + ' грн.');
    } else if (material == 2) {
        var amountToPay = (areaBlinds * TEXTILE);
        alert('Цена за кв.м: ' + TEXTILE + ' грн' + '\n' + 'Площадь: ' + areaBlinds + ' кв.м.' + '\n' + 'К оплате: ' + amountToPay + ' грн.');
    } else if (material == 3) {
        var amountToPay = (areaBlinds * ALUMINIUM);
        alert('Цена за кв.м: ' + ALUMINIUM + ' грн' + '\n' + 'Площадь: ' + areaBlinds + ' кв.м.' + '\n' + 'К оплате: ' + amountToPay + ' грн.');
    }
}

const btnBlinds = document.querySelector('.blinds');
btnBlinds.addEventListener('click', blindsCalculation);

//-------------------------------------------------------------------------------------------- Самолет
function airplaneProblem() {

    const UP_TO_1_TON = 25 / 100;                                    //
    const UP_TO_2_TON = 30 / 100;                                   //
    const UP_TO_3_TON = 35 / 100;                                  //  расход топлива на 1км
    const UP_TO_4_TON = 42 / 100;                                 //
    const UP_TO_5_TON = 50 / 100;                                //

    var volumeOfTheTank = Number.parseInt(prompt('Введите исходное количество топлива в баке (л)'));
    var weightOfCargo = Number.parseInt(prompt('Введите массу  груза (т)'));
    var distanceAC = Number.parseInt(prompt('Введите расстояние АС (км)'));
    var distanceCB = Number.parseInt(prompt('Введите расстояние СВ (км)'));
    const distanceAB = distanceAC + distanceCB;              //     общее растоягие A -> B

    if (weightOfCargo > 0 && weightOfCargo <= 1) {
        var kilometersOnTheTank = volumeOfTheTank / UP_TO_1_TON;
        if (kilometersOnTheTank >= distanceAB) {
            alert('Топлива достаточно до пункта B , дозаправка не требуется ')
        } else if (kilometersOnTheTank <= distanceAC) {
            alert('Топлива не хватит до пункта С , самолет не взлетит')
        } else if (kilometersOnTheTank >= distanceAC && kilometersOnTheTank <= distanceAB) {
            var maxKilometerCB = (distanceAB - kilometersOnTheTank) * UP_TO_1_TON;
            alert('Топлива хватит до пункта B c дозаправкой в пункте С: ' + maxKilometerCB + ' л.')
        }
    } else if (weightOfCargo > 1 && weightOfCargo <= 2) {
        var kilometersOnTheTank = volumeOfTheTank / UP_TO_2_TON;
        if (kilometersOnTheTank >= distanceAB) {
            alert('Топлива достаточно до пункта B , дозаправка не требуется ')
        } else if (kilometersOnTheTank <= distanceAC) {
            alert('Топлива не хватит до пункта С , самолет не взлетит')
        } else if (kilometersOnTheTank >= distanceAC && kilometersOnTheTank <= distanceAB) {
            var maxKilometerCB = (kilometersOnTheTank - distanceAB) * UP_TO_2_TON;
            alert('Топлива хватит до пункта B c дозаправкой в пункте С: ' + maxKilometerCB + ' л.')
        }
    } else if (weightOfCargo > 2 && weightOfCargo <= 3) {
        var kilometersOnTheTank = volumeOfTheTank / UP_TO_3_TON;
        if (kilometersOnTheTank >= distanceAB) {
            alert('Топлива достаточно до пункта B , дозаправка не требуется ')
        } else if (kilometersOnTheTank <= distanceAC) {
            alert('Топлива не хватит до пункта С , самолет не взлетит')
        } else if (kilometersOnTheTank >= distanceAC && kilometersOnTheTank <= distanceAB) {
            var maxKilometerCB = (kilometersOnTheTank - distanceAB) * UP_TO_3_TON;
            alert('Топлива хватит до пункта B c дозаправкой в пункте С: ' + maxKilometerCB + ' л.')
        }
    } else if (weightOfCargo > 3 && weightOfCargo <= 4) {
        var kilometersOnTheTank = volumeOfTheTank / UP_TO_4_TON;
        if (kilometersOnTheTank >= distanceAB) {
            alert('Топлива достаточно до пункта B , дозаправка не требуется ')
        } else if (kilometersOnTheTank <= distanceAC) {
            alert('Топлива не хватит до пункта С , самолет не взлетит')
        } else if (kilometersOnTheTank >= distanceAC && kilometersOnTheTank <= distanceAB) {
            var maxKilometerCB = (kilometersOnTheTank - distanceAB) * UP_TO_4_TON;
            alert('Топлива хватит до пункта B c дозаправкой в пункте С: ' + maxKilometerCB + ' л.')
        }
    } else if (weightOfCargo > 4 && weightOfCargo <= 5) {
        var kilometersOnTheTank = volumeOfTheTank / UP_TO_5_TON;
        if (kilometersOnTheTank >= distanceAB) {
            alert('Топлива достаточно до пункта B , дозаправка не требуется ')
        } else if (kilometersOnTheTank <= distanceAC) {
            alert('Топлива не хватит до пункта С , самолет не взлетит')
        } else if (kilometersOnTheTank >= distanceAC && kilometersOnTheTank <= distanceAB) {
            var maxKilometerCB = (kilometersOnTheTank - distanceAB) * UP_TO_5_TON;
            alert('Топлива хватит до пункта B c дозаправкой в пункте С: ' + maxKilometerCB + ' л.')
        }
    } else if (weightOfCargo > 5) {
        alert('Самолет не взлетит ( перегруз )')
    }
}

const btnAirplane = document.querySelector('.airplane');
btnAirplane.addEventListener('click', airplaneProblem);