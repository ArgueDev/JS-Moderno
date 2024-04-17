// Fizz Buzz
// Multiplos de 3 con la palabra fizz
// Multiplos de 5 con la palabra buzz
// Multiplos de 3 y 5 con la palabra fizzBuzz

for (let i = 1; i <= 100; i++){
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}