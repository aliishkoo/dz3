var funArrow = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
};

console.log(funArrow(2, 8));


var userFunc = (str = prompt("name")) => {
    if (!str.trim()) return;

    if (str.length < 2) return alert("Min length 2");

    if (str.length > 15) return alert("Max length 15");

    console.log(str);
};

userFunc();


function func(a, b, c) {
    if (c === '+') {
        return a + b;
    } else if (c === '-') {
        return a - b;
    } else if (c === '*') {
        return a * b;
    } else if (c === '/') {
        return a / b;
    } else if (b === 0) {
        return alert("Делить на ноль нельзя");
    } else {
        return alert("Error")
    }
}

func()
console.log(funArrow(8, 2, '+'));
console.log(funArrow(8, 2, '-'));
console.log(funArrow(8, 2, '*'));
console.log(funArrow(8, 2, '/'));
console.log(funArrow(8, 0, '/'));
