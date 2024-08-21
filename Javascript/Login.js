import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from './Firebase.js';

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
            login_right.style.backgroundColor = "#0d1117"
            
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



        //----------------------------Authentication-----------------------------------//


    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");
    const successMsg = document.getElementById("success_msg");
    const loader = document.getElementById("loader");
    const load = document.getElementById("load");
    
    function validatePasswords() {
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        if (password === confirmPassword && password !== "") {
            passwordField.style.borderBottomColor = "green";
            passwordField.style.borderBottomWidth = "4px";
            confirmPasswordField.style.borderBottomColor = "green";
            confirmPasswordField.style.borderBottomWidth = "4px";
        } else {
            passwordField.style.borderBottomColor = "red";
            passwordField.style.borderBottomWidth = "4px";
            confirmPasswordField.style.borderBottomColor = "red";
            confirmPasswordField.style.borderBottomWidth = "4px";
        };
    };

    confirmPasswordField.addEventListener("input", validatePasswords);
    passwordField.addEventListener("input", validatePasswords);

    login_btn.addEventListener("click", async (event) => {
        
        const email = document.getElementById("email").value;
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;
        
        successMsg.textContent = "";
        successMsg.style.backgroundColor = "";
        confirmPasswordField.style.borderBottomColor = "";
        passwordField.style.borderBottomColor = "";

       
        if (!isLoginPage) {
            if (email && password && confirmPassword) {
                if (password === confirmPassword) {

                    try{
                        load.style.width = "40%";
                        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                        load.style.width = "100%";

                        setTimeout(() => {
                            load.style.width = "0";
                        }, 2000);

                        successMsg.textContent = "Registration successful!";
                        successMsg.style.backgroundColor = "#72ed72";
                        successMsg.style.marginTop = "25px";
                        setTimeout(() => {
                            successMsg.style.marginTop = "-100px";
                            
                        }, 3000);
                        passwordField.value = "";
                        confirmPasswordField.value = "";
                    }
                        catch(error) {
                            successMsg.textContent = error.message;
                            successMsg.style.backgroundColor = "#ed7272";
                            successMsg.style.marginTop = "25px";

                            setTimeout(() => {
                                successMsg.style.marginTop = "-100px";
                            }, 3000);

                            passwordField.value = "";
                            confirmPasswordField.value = "";
                        };

                } else {
                    validatePasswords();
                    successMsg.textContent = "Passwords do not match";
                    successMsg.style.backgroundColor = "#ed7272";
                    successMsg.style.marginTop = "25px";

                    setTimeout(() => {
                        successMsg.style.marginTop = "-100px";
                    }, 3000);

                    passwordField.value = "";
                    confirmPasswordField.value = "";
                }
            } else {
                loader.style.marginLeft = "90%";
                setTimeout(() => {
                    successMsg.textContent = "Please fill all fields";
                    successMsg.style.backgroundColor = "#ed7272";
                    successMsg.style.marginTop = "25px";
    
                    setTimeout(() => {
                        successMsg.style.marginTop = "-100px";
                    }, 3000);
    
                    passwordField.value = "";
                    confirmPasswordField.value = "";
                }, 2000)

                setTimeout(() => {
                    loader.style.marginLeft = "110%";
                }, 2000);  
            }
        } else {
            if(email && password){
                try{
                    load.style.width = "50%";
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    load.style.width = "100%";
                    setTimeout(() => {
                        load.style.width = "0";
                    }, 2000);
                    successMsg.style.marginTop = "25px";
                    successMsg.textContent = "Login successful!";
                    successMsg.style.backgroundColor = "#32ff2f89"
                    setTimeout(() => {
                        successMsg.style.marginTop = "-100px";
                    }, 3000);
                }
                catch (error) {
                    successMsg.textContent = "Invalid Credentials";
                    successMsg.style.backgroundColor = "#ed7272";
                    successMsg.style.marginTop = "25px";
                    setTimeout(() => {
                        successMsg.style.marginTop = "-100px";
                    }, 3000);
                    passwordField.value = "";
                };
            }
            else{
                loader.style.marginLeft = "90%";

                setTimeout(() => {
                    successMsg.style.marginTop = "25px";
                    successMsg.style.backgroundColor = "#ed7272";
                    successMsg.textContent = "Please fill all fields";
                    setTimeout(() => {
                        successMsg.style.marginTop = "-100px";
                    }, 3000);
                }, 2000);

                setTimeout(() => {
                    loader.style.marginLeft = "110%";
                }, 2000);
                
            };
        };    
    });

});  //DOM



