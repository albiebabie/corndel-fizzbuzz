for (let number = 1; number < 101; number++) {
    const FizzBuzz = "FizzBuzz";
    const Buzz = "Buzz";
    const Fizz = "Fizz";
    const Bang = "Bang";
    if (numberIsFizzBuzz(number)) {
        console.log(FizzBuzz);
    } else if (numberIsBang(number)) {
        console.log(Bang)
    } else if (numberIsBuzz(number)) {
        console.log(Buzz);
    } else if (numberIsFizz(number)) {
        console.log(Fizz);
    } else {
        console.log(number);
    }
}

function numberIsDivisible(number, divisor) {
    return number % divisor == 0;
}

function numberIsFizzBuzz(number) {
    return numberIsDivisible(number, 5) && numberIsDivisible(number, 3);
}

function numberIsBuzz(number) {
    return numberIsDivisible(number, 5);
}

function numberIsFizz(number) {
    return numberIsDivisible(number, 3);
}

function numberIsBang(number) {
    return numberIsDivisible(number, 7);
}

// If a number is a multiple of 7, print "Bang" instead of the number. For numbers which are multiples of seven and three / five, append Bang to what you'd have printed anyway. (E.g. 3 * 7 = 21: "FizzBang").