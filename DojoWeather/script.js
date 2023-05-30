console.log(`loading...`)

function city_weather() {
    alert(`Loading weather report...`)
}

function alert_dismiss() {
    document.querySelector(".cookie").remove()
}

let temp = []
console.log(`beginning empty arr ${temp}`)
function temp_change() {
    let elements = document.querySelectorAll(".temp");
    console.log(elements)
    for(elements of elements){
        console.log(`I need this ${elements.textContent}`)
//        elements.textContent = 
        temp.push(elements.textContent)
    }
    console.log(`where is this ${temp}`)
    ".temp"[0] = 75
    console.log(`searching for first ${temp[0]}`)
}



// let hot = []
// let cold = []

// function temp_change() {
// //    for (let i = 0; i<)
//     //console.log(document.querySelector(".temp").innerText)

//     //document.querySelector(".temp").innerText = 75, 65

//     let list = console.log(document.querySelectorAll(".hot"));
// //    console.log(list)
//     for (let i of list ){
//         hot.push(list)
//     }
    //    for (let i = 0, i < ".temp".length, i++) {
        
//    }

    //document.querySelectorAll(".temp").forEach((hot) => {
    //    console.log((".hot"[0]))
    //})

    //console.log(document.querySelectorAll(".temp").innerText)
    //let arr = []
    //arr.push(".temp")
    //console.log(arr)
//}




