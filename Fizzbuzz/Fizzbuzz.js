// write a code to go through each number 1-100
// multiples of 3:          Fizz
// multiples of 5:          buzz
// multiples of 3 and 5:    fizzbuzz
// all other numbers:       print normally

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log(`Fizzbuzz ${i}`)
    else if (i % 3 == 0){
        console.log(`Fizz ${i}`)
    }
    else if (i % 5 == 0){
        console.log(`Buzz ${i}`)
    }
    else {
        console.log(`${i}`)
    }
}