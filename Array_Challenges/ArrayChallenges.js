//// Always Hungry ////
function alwaysHungry(arr){
    let food_found = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log(`yummy`);
            food_found = true;
        }
    }
    if (food_found == false){
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"

alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



//// High Pass Filter ////

function highPass(arr, cutoff){
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



//// Better than average ////

function betterThanAverage(arr) {
    let sum = 0;  
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let arr_average = sum/arr.length ;
    
    let count = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] > arr_average){
            count = count + 1;
        }
    }
    return count;
}

let result1 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result1); // we expect back 4



//// Array Reverse ////
function reverse(arr){
    let beginning = 0;
    let end = arr.length - 1;
    
    while (beginning < end){
        let temp = arr[beginning];
        arr[beginning] = arr[end];
        arr[end] = temp;

        beginning++;
        end--;
    }
    return arr;
}
let result2 = reverse(["a", "b", "c", "d", "e"]);
console.log(result2); // we expect backk ["e", "d", "c", "b", "a"]



//// Fibonacci Array ////
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    let fibArr = [0, 1];  
    for (i = 2; i < n; i++){
        fibArr.push(fibArr[i-2] + (fibArr[i-1]))
    }
    return fibArr;
}

let result3 = fibonacciArray(10);
console.log(result3); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

