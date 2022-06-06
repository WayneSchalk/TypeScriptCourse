"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let app = document.getElementById("app");
const options = { weekday: "long" };
app.innerHTML = `
<h1>Hello World</h1>
<h2>Im Wayne</h2>
<p> Today Is : <b> ${new Intl.DateTimeFormat("en-US", options).format()}  </b></p>`;
let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");
button.addEventListener("click", () => {
    let checkPalindrome = input.value.toLocaleLowerCase();
    if (checkPalindrome === "") {
        output.innerHTML = "Please Enter a Value";
    }
    else if (checkPalindrome.split("").reverse().join("") === checkPalindrome) {
        output.innerHTML =
            '<h4 style="color: green">Palindrome<strong style="margin-left: 10px">&#10003 </strong> </h4>';
    }
    else {
        output.innerHTML =
            '<h4 style="color: red">Not a Palindrome<strong style="margin-left: 10px">&#2716 </strong> </h4>';
    }
});
// Contact form
let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let nameValue = name === null || name === void 0 ? void 0 : name.value;
    let surnameValue = surname === null || surname === void 0 ? void 0 : surname.value;
    let emailValue = email === null || email === void 0 ? void 0 : email.value;
    let phoneValue = phone === null || phone === void 0 ? void 0 : phone.value;
    let contactFormOutput = document.getElementById("contactFormOutput");
    let outputValues = {
        name: nameValue,
        surname: surnameValue,
        email: emailValue,
        phone: phoneValue,
    };
    contactFormOutput.innerHTML = `<h4>Name: ${outputValues.name}</h4>
    <h4>Surname: ${outputValues.surname}</h4>
    <h4>Email: ${outputValues.email}</h4>
    <h4>Message: ${outputValues.phone}</h4>`;
    const sendData = (data) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("http://127.0.0.1:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    });
    let outputMsg = document.getElementById("outputMsg");
    sendData(outputValues).then((data) => {
        if (data.message === "success") {
            outputMsg.innerHTML = `<h4 style="color: green">Message Sent Successfully</h4>`;
        }
    });
    name.value = "";
    surname.value = "";
    email.value = "";
    phone.value = "";
});
