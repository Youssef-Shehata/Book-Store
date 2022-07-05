const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("submit");
const form = document.getElementById("form");


login.addEventListener("click", (e) => {
    if (email.value === "admin@gmail.com" && password.value === "123") {
        form.action = "admin.html";
    }
    else if (localStorage.getItem(email.value) && localStorage.getItem(password.value)) {
        localStorage.setItem('email', email.value);
        form.action = "home.html"

    }
    else {
         e.preventDefault();
        alert("account not found");

    }

})
