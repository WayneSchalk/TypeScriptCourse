let app = document.getElementById("app") as HTMLInputElement;

const options: {} = { weekday: "long" };

app.innerHTML = `
<h1>Hello World</h1>
<h2>Im Wayne</h2>
<p> Today Is : <b> ${new Intl.DateTimeFormat(
  "en-US",
  options
).format()}  </b></p>`;

let input = document.getElementById("input") as HTMLInputElement;
let button = document.getElementById("button") as HTMLInputElement;
let output = document.getElementById("output") as HTMLInputElement;

button.addEventListener("click", () => {
  let checkPalindrome: any = input.value.toLocaleLowerCase();

  if (checkPalindrome === "") {
    output.innerHTML = "Please Enter a Value";
  } else if (checkPalindrome.split("").reverse().join("") === checkPalindrome) {
    output.innerHTML =
      '<h4 style="color: green">Palindrome<strong style="margin-left: 10px">&#10003 </strong> </h4>';
  } else {
    output.innerHTML =
      '<h4 style="color: red">Not a Palindrome<strong style="margin-left: 10px">&#2716 </strong> </h4>';
  }
});

// Contact form

let contactForm = document.getElementById("contactForm") as HTMLFormElement;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name") as HTMLInputElement;
  let surname = document.getElementById("surname") as HTMLInputElement;
  let email = document.getElementById("email") as HTMLInputElement;
  let phone = document.getElementById("phone") as HTMLInputElement;

  let nameValue = name?.value;
  let surnameValue = surname?.value;
  let emailValue = email?.value;
  let phoneValue = phone?.value;

  let contactFormOutput = document.getElementById(
    "contactFormOutput"
  ) as HTMLDivElement;

  let outputValues: {
    name: string;
    surname: string;
    email: string;
    phone: string;
  } = {
    name: nameValue,
    surname: surnameValue,
    email: emailValue,
    phone: phoneValue,
  };

  contactFormOutput.innerHTML = `<h4>Name: ${outputValues.name}</h4>
    <h4>Surname: ${outputValues.surname}</h4>
    <h4>Email: ${outputValues.email}</h4>
    <h4>Message: ${outputValues.phone}</h4>`;

  const sendData = async (data: any) => {
    const response = await fetch("http://127.0.0.1:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  let outputMsg = document.getElementById("outputMsg") as HTMLDivElement;

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
