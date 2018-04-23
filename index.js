for (let number = 1; number < 101; number++) {
    const FizzBuzz = "FizzBuzz";
    const Buzz = "Buzz";
    const Fizz = "Fizz";
    if (numberIsFizzBuzz(number)) {
        console.log(FizzBuzz);
    } else if (numberIsBuzz(number)) {
        console.log(Buzz);
    } else if (numberIsFizz(number)) {
        console.log(Fizz);
    } else {
        console.log(number);
    }
}


function numberIsDivisibleByDivisor(number, divisor) {
    return number % divisor == 0;
}

function numberIsFizzBuzz(number) {
    return numberIsDivisibleByDivisor(number, 5) && numberIsDivisibleByDivisor(number, 3);
}

function numberIsBuzz(number) {
    return numberIsDivisibleByDivisor(number, 5)
}

function numberIsFizz(number) {
    return numberIsDivisibleByDivisor(number, 3)
}