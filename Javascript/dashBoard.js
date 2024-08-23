const sidePanel = document.getElementById("sidePanel");
const recent = document.getElementById("recent");
const mode = document.getElementById("dark_mode");
const dash = document.getElementById("dash_");
const sendMoney = document.getElementById("sendMoney");
const sidecolor = document.querySelectorAll(".sideColor");
const home = document.getElementById("home");
const sendHeader = document.getElementById("sendTab_header");

let isDarkMode = false;  
let isRotated = false;

mode.addEventListener("click", () => {
    if (!isDarkMode) {
        mode.style.color = "#ffffff";
        recent.style.backgroundColor = "#0d1117";
        sidePanel.style.backgroundColor = "#0d1117";
        sidePanel.style.color = "#ffffff";
        recent.style.color = "#ffffff";
        dash.style.backgroundColor = "#000000";
        home.style.color = "#efefef";
        sendHeader.style.color = "#efefef";
        sidecolor.forEach((element) => {
            element.style.color = "#efefef";
        })
    } else {
        mode.style.color = "#000000";
        recent.style.backgroundColor = "#efefef";
        sidePanel.style.backgroundColor = "#efefef";
        sidePanel.style.color = "#000000";
        recent.style.color = "#000000";
        dash.style.backgroundColor = "#ffffff";
        sendHeader.style.color = "#000000";

        sidecolor.forEach((element) => {
            element.style.color = "#0d1117";
        })
    }

    if (!isRotated) {
        mode.style.transform = "rotate(90deg)";
    } else {
        mode.style.transform = "rotate(0deg)";
    }
    isRotated = !isRotated;

    isDarkMode = !isDarkMode;
});


//Switching highlight between options

const allDivs = document.querySelectorAll(".dashboard, .sendMoney, .depositMoney, .withdrawMoney, .checkBalance");
function hideHighlight(isDarkMode){
    allDivs.forEach(div => div.classList.remove("highlight"));
    if(!isDarkMode){
        home.style.color = "black";
    }
    else{
        home.style.color = "#efefef";
    }

    isDarkMode = !isDarkMode;
}

allDivs.forEach(div => {
    div.addEventListener("click", (event) => {
        event.preventDefault();
        hideHighlight();
        div.classList.add("highlight");
    });
});

const hidden = document.getElementsByClassName("hidden");
const sendTab = document.getElementById("send_tab");
const confirm_button = document.getElementById("send_button");
const receiver_info = document.getElementById("receiver-info");
const confirm_trans = document.getElementById("confirm_trans");
const success_screen = document.getElementById("success_screen");
const send_button = document.getElementById("confirm_button");
const fail_screen = document.getElementById("fail_screen");

sendMoney.addEventListener("click", (event) => {
    event.preventDefault();
    home.classList.add("hidden");
    sendTab.classList.remove("hidden");
});

confirm_button.addEventListener("click", (event) => {
    event.preventDefault();

    receiver_info.style.marginLeft = "-620px";
    receiver_info.style.zIndex = "-999";
    confirm_trans.classList.remove("hidden");

});

send_button.addEventListener("click", (event) => {

    event.preventDefault();

    success_screen.classList.remove("hidden")
    success_screen.style.marginLeft = "50%"
    success_screen.style.zIndex = "100";
    confirm_trans.style.marginLeft = "1198px"
})



