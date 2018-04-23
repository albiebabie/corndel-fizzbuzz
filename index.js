for (let i = 1; i < 101; i++) {
    const number = i;
    if (numberIsFizzBuzz(number)) {
        console.log("FizzBuzz");
    } else if (numberIsBuzz(number)) {
        console.log("Buzz");
    } else if (numberIsFizz(number)) {
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

function numberIsFizzBuzz(number) {
    if (numberIsDivisibleByDivisor(number, 5) && numberIsDivisibleByDivisor(number, 3)) {
        return true;
    }
}

function numberIsBuzz(number) {
    if (numberIsDivisibleByDivisor(number, 5)) {
        return true;
    }
}

function numberIsFizz(number) {
    if (numberIsDivisibleByDivisor(number, 3)) {
        return true;
    }
}