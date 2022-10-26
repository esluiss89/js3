const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")


option1.style.backgroundColor = "red"
option2.style.backgroundColor = "orange"
option3.style.backgroundColor = "yellow"
option4.style.backgroundColor = "green"

function colorA() {
    option1.style.backgroundColor = "blue"
    option2.style.backgroundColor = "pink"
    option3.style.backgroundColor = "purple"
    option4.style.backgroundColor = "gray"
}

function colorS() {
    option1.style.backgroundColor = "orange"
    option2.style.backgroundColor = "red"
    option3.style.backgroundColor = "fuchsia"
    option4.style.backgroundColor = "black"
}

function colorD() {
    option1.style.backgroundColor = "brown"
    option2.style.backgroundColor = "green"
    option3.style.backgroundColor = "yellow"
    option4.style.backgroundColor = "red"
}

document.addEventListener("keydown", function (Event) {
    if (Event.key === "a") {
        colorA()
    }

    if (Event.key === "s") {
        colorS()
    }

    if (Event.key === "d") {
        colorD()
    }

})


option1.addEventListener("click", () => {
    option1.style.background = "fuchsia"

})

option2.addEventListener("click", () => {
    option1.style.background = "yellow"

})

option3.addEventListener("click", () => {
    option1.style.background = "blue"

})


option4.addEventListener("click", () => {
    option1.style.background = "green"

})

