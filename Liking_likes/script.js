console.log(`connected`)

let arr_like_count = [9, 12, 9]

function person1_likes() {
    document.querySelector(`#person_1`).innerText++
    arr_like_count[0] = arr_like_count[0] + 1
}

function person2_likes() {
    document.querySelector(`#person_2`).innerText++
    arr_like_count[1] = arr_like_count[1] + 1
}

function person3_likes() {
    document.querySelector(`#person_3`).innerText++
    arr_like_count[2] = arr_like_count[2] + 1
}

