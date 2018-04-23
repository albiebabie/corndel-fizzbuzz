const Buzz = "Buzz";
const Fizz = "Fizz";
const Bang = "Bang";
const Bong = "Bong";
const Fezz = "Fezz";


for (let number = 1; number < 301; number++) {
    let message = [];
    if (numberIsBong(number)) {
        if (numberIsFezz(number)) {
            message.push(Fezz);
        }
        message.push(Bong);
    } else {
        if (numberIsFizz(number)) {
            message.push(Fizz);
        }
        if (numberIsBuzz(number)) {
            message.push(Buzz);
        }
        if (numberIsBang(number)) {
            message.push(Bang);
        }
        if (numberIsFezz(number)) {
            if (message.length > 0) {
                let firstLetter = message[0].charAt(0).toUpperCase();
                if (firstLetter == "B") {
                    message.unshift(Fezz);
                }
            } else {
                message.push(Fezz);
            }
        }
    }
    if (number % 17 === 0) {
        message.reverse();
    }
    if (message.length == 0) {
        console.log(number);
    } else {
        console.log(message.join(""));
    }
}

function numberIsDivisible(number, divisor) {
    return number % divisor == 0;
}

function numberIsFizz(number) {
    return numberIsDivisible(number, 3);
}

function numberIsBuzz(number) {
    return numberIsDivisible(number, 5);
}

function numberIsBang(number) {
    return numberIsDivisible(number, 7);
}

function numberIsBong(number) {
    return numberIsDivisible(number, 11);
}

function numberIsFezz(number) {
    return numberIsDivisible(number, 13);
}