let form = document.querySelector("form");
let modal = document.querySelector(".modal-overlay");
let modalInfo = document.querySelector(".modal-info")

let userInfo = {}
form.addEventListener("submit" , (event) => {
    event.preventDefault();

    let elements = event.target.elements
    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;
    userInfo.choice = elements.choice.value;
    userInfo.color = elements.color.value;
    userInfo.range = elements.range.value;
    userInfo.book = elements.book.value;
    userInfo.terms = elements.terms.checked;


    modal.classList.add("open")
    let close = document.querySelector(".btn-close");
    close.addEventListener("click", () =>{
        modal.classList.remove("open")
    })

    displayInfo(userInfo)
});

function displayInfo (data={}) {
    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`
    let choice = document.createElement("p");
    choice.innerText = `Choice: ${data.choice}`
    let color = document.createElement("p");
    color.innerText = `Color: ${data.color}`
    let range = document.createElement("p");
    range.innerText = `Range: ${data.range}`
    let book = document.createElement("p");
    book.innerText = `Book: ${data.book}`
    let terms = document.createElement("p");
    terms.innerText = `Terms: ${
        data.terms
        ? "You have accepted the terms and condition"
        : "You have not accepted the terms and condition "
    }`

    modalInfo.append(h1,email,choice,color,range,book,terms)
}

