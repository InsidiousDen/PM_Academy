function task1() {
    let n = parseInt(prompt("Введите первое число"), 10);
    let m = parseInt(prompt("Введите второе число"), 10);

    if (isNaN(n, m)) {
        alert("Вы ввели не число. Попробуйте еще раз");
    } else if (n === m || n + 1 === m || n === m + 1) {
        result = "В этом диапазоне нет чисел";
    }
    else {
        for (let i = n + 1; i < m; i++) {
            result += i + "; ";
        }
    }
    alert(`Числа между ${n} и ${m} это: ${result}`);
}

function task2() {
    let n = prompt("Введите первое число");
    let m = prompt("Введите второе число");

    // arrow function

    if (isNaN(n, m)) {
        alert("Вы ввели не число. Попробуйте еще раз");
    } else {
        const power = (arg1, arg2 = 2) => {
            return Math.pow(arg1, arg2);
        };

        alert(`Число ${n} в ${m} степени равно ${power(n, m)}`);
    }

    // function expression

    // if (isNaN(n, m)) {
    //     alert("Вы ввели не число. Попробуйте еще раз");
    // } else {
    //     function power2(arg1, arg2 = 2) {
    //         return Math.pow(arg1, arg2);
    //     }
    //     alert(`Число ${n} в ${m} степени равно ${power2(n, m)}`);
    // }
}


function task3() {
    let n = parseFloat(prompt("Введите первое число"));
    let m = parseFloat(prompt("Введите второе число"));

    if (isNaN(n, m)) {
        alert("Вы ввели не число. Попробуйте еще раз");
    } else {
        const rounding = (arg) => {
            return Math.round(arg * 0.3);
        };
        alert(`${n} * 0.3 ≈ ${rounding(n)} \n${m} * 0.3 ≈ ${rounding(m)}`);
    }
}

function task4() {
    let n = parseFloat(prompt("Введите первое число"));
    let m = parseFloat(prompt("Введите второе число"));

    if (isNaN(n, m)) {
        alert("Вы ввели не число. Попробуйте еще раз");
    } else {
        function randomInt(arg1, arg2) {
            let rand = arg1 - 0.5 + Math.random() * (arg2 - arg1 + 1);
            return Math.round(rand);
        };
    alert(`Случайное число от ${n} до ${m} это: ${randomInt(n, m)}`);
    }
}

function task5() {
    let firstString = prompt("Введите первую строку");
    let secondString = prompt("Введите вторую строку");

    if (firstString === null || secondString === null) {
        alert("Вы ввели не строку. Попробуйте еще раз");
        } else {
            let arrayIndex = [];
            let result = 0;
            let index = 0;
        
        while (firstString.includes(secondString, index)) {
            result++;
            let indexRepetion = firstString.indexOf(secondString, index);
            arrayIndex.push(indexRepetion);
            index = indexRepetion + secondString.length;
        }
        alert(
            result !== 0
            ? `Количество повторений: ${result}. Идексы вхождений: ${arrayIndex}`
            : " Cовпадений не обнаружено. Попробуйте еще раз"
        );
        }
}

function task6() {
    let numbers = parseInt(
        "ECMAScript 2015 (6th Edition, ECMA-262)".replace(/\D+/g, "")
    );
    alert(numbers);
}

function task7() {
    let upperCase = String(
        "ECMAScript 2015 (6th Edition, ECMA-262)".match(/[A-Z]/g)
    );

    alert(upperCase);
}