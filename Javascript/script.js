import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./Firebase.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript file loaded");
    console.log("JavaScript file loaded");

    const login_btn = document.getElementById("login_btn");
    const hasAccount = document.getElementById("has_account");


  

    const menuBars = document.getElementById("menuBars");
    console.log(menuBars);
    const menu = document.getElementById("menu");

    let menuOpen = false;

    menuBars.addEventListener("click", (event) => {
        event.preventDefault();
        if(!menuOpen){
            menu.style.display = "flex";
        }
        else{
             menu.style.display = "none"
        }        
        menuOpen = !menuOpen;
    })
    console.log("JavaScript file loaded3");
    console.log("1");


      //dashboard 

      const allDivs = document.querySelectorAll(".dashboard, .sendMoney, .depositMoney, .withdrawMoney, .checkBalance");

      function removeHighlight() {
          allDivs.forEach(div => div.classList.remove("highlight"));4
      }
  
      console.log("2")
   
      allDivs.forEach(div => {
          div.addEventListener("click", (event) => {
  
              event.preventDefault();
              removeHighlight();
              div.classList.add("highlight"); 
             
          });
      });
  
      
      console.log("3")


    //register button
    const register = document.getElementById("register");
    register.addEventListener("click", () => {
        window.location.href = "Login.html"
        console.log("click click")
        
    })
    console.log("4")


    const createAccount = document.getElementById("createAccount");
    createAccount.addEventListener("click", () => {
        window.location.href = "login.html"
        login_header.textContent = "Signup";
        hasAccount.textContent = "Already have an account?";
        login_btn.textContent = "Signup";
        signup.textContent = "Login";
        confirmPass.style.marginTop = "0%";
        input_input.style.overflow = "visible";
        input_input.style.height = "42vh";
        forgot_pass.style.marginTop = "-12%";
        forgot.style.overflow = "hidden";
        forgot.style.height = "100px";
    })

    console.log("6")

    let isLoginPage = true;

    console.log("7")
    console.log("10")

    
    

});








