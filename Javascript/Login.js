document.addEventListener("DOMContentLoaded", () => {
    //----------------------------------------------------Login Page
    const login_header = document.getElementById("login_header");
    const hasAccount = document.getElementById("has_account");
    const forgot_pass = document.getElementById("forgot_pass");
    const signup = document.getElementById("signup");
    const login_btn = document.getElementById("login_btn");
    const confirmPass = document.getElementById("confirmPass");
    const input_input = document.getElementById("input_input");
    const forgot = document.getElementById("forgot");
    const login_right = document.getElementById("login_right");
    const signup_header = document.getElementById("signup_header");
    
    let isLoginPage = true;
    signup.addEventListener("click", (event) => {
    
        event.preventDefault();
        
        if(isLoginPage){
            login_header.style.marginLeft = "-105%";
            hasAccount.textContent = "Already have an account?";
            login_btn.textContent = "Signup";
            signup.textContent = "Login";
            confirmPass.style.marginTop = "0%";
            input_input.style.overflow = "visible";
            input_input.style.height = "42vh";
            forgot_pass.style.marginTop = "-12%";
            forgot.style.overflow = "hidden";
            forgot.style.height = "100px";
            login_right.style.backgroundColor = "#000000"
            
        }
        else{
            login_header.style.marginLeft = "12%";
            hasAccount.textContent = "Don't have an account?"
            login_btn.textContent = "Login";
            signup.textContent = "Sign up";
            input_input.style.height = "32vh";
            input_input.style.overflow = "hidden";
            confirmPass.style.marginTop = "10%";
            forgot_pass.style.marginTop = "7.4%";
            forgot.style.overflow = "visible";
            forgot.style.height = "200px";
            login_right.style.backgroundColor = "#04849a"
            
        }
        isLoginPage = !isLoginPage;
    });


});
