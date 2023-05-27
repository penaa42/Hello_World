// for and while
// if/else

// Print odds 1-20
for (let i = 1; i <= 20; i++){
    if (i % 2 !== 0){
        console.log(`${i}`)
    }
}

// Decreasing Multiples of 3
for (let i = 100; i > 0; i--){
    if (i % 3 == 0){
        console.log(`${i} multiple of 3`)
    }
}

// Print the sequence 
let i = 5.5;
while (i > -3.5){
    i = i -1.5;
    console.log(i)
}

// Sigma
let sum = 0;
for (let i = 0; i <= 100; i++){
    sum = sum + i;
}
console.log(sum)

// Factorial
let product = 1;
for (let i = 1; i <= 12; i++){
    product = product * i;
}
console.log(product)

