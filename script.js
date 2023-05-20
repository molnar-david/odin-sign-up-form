let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let errorMsg = document.getElementById("error-msg")
let isPasswordEntered = false;

function checkPassword (event) {
    if (event.target === confirmPassword || event.target === password && isPasswordEntered) {
        if (password.value === confirmPassword.value) {
            errorMsg.textContent = "";
            password.classList.remove("invalid");
            confirmPassword.classList.remove("invalid");
        } else {
            isPasswordEntered = true;
            errorMsg.textContent = "Passwords do not match";
            password.classList.add("invalid");
            confirmPassword.classList.add("invalid");
        }
    }
}

password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);