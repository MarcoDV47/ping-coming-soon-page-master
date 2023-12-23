const input = document.getElementById("email");
const p = document.querySelector(".error-msg")
const form = document.querySelector("form");
const inputValue = input.value;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() == "") {
        isError(true);
        console.log("hello");
    } else {
        isError(false);
        console.log("daodaod");
    }
})

function isError(status) {
    if (status) {
        p.classList.add("error");
        input.classList.add("error");
        console.log("toggle true");
    } else {
        p.classList.remove("error");
        input.classList.remove("error");
        console.log("toggle false");
    }
}