for (let i = 1; i < 101; i++) {
    const number = i;
    if (numberIsDivisibleByDivisor(number, 5) && numberIsDivisibleByDivisor(number, 3)) {
        console.log("FizzBuzz");
    } else if (numberIsDivisibleByDivisor(number, 5)) {
        console.log("Buzz");
    } else if (numberIsDivisibleByDivisor(number, 3)) {
        console.log("Fizz");
    } else {
        console.log(number);
    }
}

function numberIsDivisibleByDivisor(number, divisor) {
    if (number % divisor === 0) {
        return true;
    }
}