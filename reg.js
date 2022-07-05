const email = document.getElementById("email");
const password = document.getElementById("password");
const reg = document.getElementById("submit");
const password1 = document.getElementById('password1');
const form = document.getElementById("form");

reg.addEventListener("click", (e) => {
    valid();
})

function valid() {
    if (password.value !== password1.value){
        alert("passwords must match");
    }
    else {
        localStorage.setItem(email.value, "email");
        localStorage.setItem(password.value, "password");
        form.action = "home.html"

    }

}

