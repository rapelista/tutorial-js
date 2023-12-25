function square(a, b, c) {
    return a ** b ** c;
};

function square(a, b) {
    return a ** b;
};

function square(a) {
    return a ** a;
}

console.log(square(1, 2));
console.log(square(3));
console.log(square(1, 2, 3));