const range = document.getElementById("range");
const number = document.getElementById("number");
const generator = document.getElementById("generator");
const result = document.getElementById("result");
const resultInput = document.querySelector(".password-result");
const copy = document.getElementById("copy");
const successfully = document.querySelector(".successfully");

number.innerHTML = range.value;

range.addEventListener("input", () => {
  number.innerHTML = range.value;
});

generator.addEventListener("click", passwordGenerator);

function passwordGenerator() {
  let password = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%&*_-+=:;.?";

  for (let i = 0; i < range.value; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  result.value = password;
  resultInput.style.display = "flex";
}

copy.addEventListener("click", () => {
  result.select();
  document.execCommand("copy");
  successfully.style.display = "block";

  setTimeout(() => {
    successfully.style.display = "none";
  }, 3000);
});
