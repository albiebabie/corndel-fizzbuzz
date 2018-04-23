for (let i = 1; i < 101; i++) {
    const number = i;
    if (number % 5 === 0 && number % 3 === 0) {
        console.log("FizzBuzz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(number);
    }
}