const sidePanel = document.getElementById("sidePanel");
const recent = document.getElementById("recent");
const mode = document.getElementById("dark_mode");
const dash = document.getElementById("dash_");
const sendMoney = document.getElementById("sendMoney");
const sidecolor = document.querySelectorAll(".sideColor");
const home = document.getElementById("home");
const sendHeader = document.getElementById("sendTab_header");
const account_section = document.getElementById("account_section");
const account_flex = document.getElementById("account_flex");
const account_menu = document.getElementById("account_menu");
const account_right = document.getElementById("account_right");
const settings = document.getElementById("settings");
const notifications = document.getElementById("notifications");
const spprt = document.getElementById("support_sec");

let isDarkMode = false;  
let isRotated = false;

function applyDarkMode() {
    mode.style.color = "#ffffff";
    recent.style.backgroundColor = "#0d1117";
    sidePanel.style.backgroundColor = "#0d1117";
    sidePanel.style.color = "#ffffff";
    recent.style.color = "#ffffff";
    dash.style.backgroundColor = "#000000";
    home.style.color = "#efefef";
    sendHeader.style.color = "#efefef";
    account_section.style.backgroundColor = "#010409";
    account_flex.style.backgroundColor = "#010409";
    account_menu.style.backgroundColor = "#0d1117";
    account_right.style.backgroundColor = "#0d1117";
    settings.style.backgroundColor = "#0d1117";
    settings.style.color = "#ffffff";
    notifications.style.backgroundColor = "#0d1117";
    notifications.style.color = "#ffffff";
    spprt.style.backgroundColor = "#0d1117";
    sidecolor.forEach((element) => {
        element.style.color = "#efefef";
    });
}

function applyLightMode() {
    mode.style.color = "#000000";
    recent.style.backgroundColor = "#efefef";
    sidePanel.style.backgroundColor = "#efefef";
    sidePanel.style.color = "#000000";
    recent.style.color = "#000000";
    dash.style.backgroundColor = "#ffffff";
    sendHeader.style.color = "#000000";
    account_section.style.backgroundColor = "#ffffff";
    account_flex.style.backgroundColor = "#ffffff";
    account_menu.style.backgroundColor = "#efefef";
    account_right.style.backgroundColor = "#efefef";
    sidecolor.forEach((element) => {
        element.style.color = "#0d1117";
    });
}

mode.addEventListener("click", () => {
    if (!isDarkMode) {
        applyDarkMode();
    } else {
       applyLightMode();
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
    home.style.color = isDarkMode ? "#efefef" : "black";

    isDarkMode = !isDarkMode;
}

allDivs.forEach(div => {
    div.addEventListener("click", (event) => {
        event.preventDefault();
        hideHighlight();
        div.classList.add("highlight");
    });
});


const visible = 'visibility';
const myAccountDivs = document.querySelectorAll(".account_right, .Settings, .notif, .support");
const myAccountBtn = document.querySelectorAll("#pbf, #account_setting, #notif, #support");

const idToClassMap = {
    pbf: '.account_right',
    account_setting: '.Settings',
    notif: '.notif',
    support: '.support'
};

function hideAllDivs() {
    myAccountDivs.forEach(accountDiv => {
        accountDiv.classList.add(visible);
    });
}

hideAllDivs();

myAccountBtn.forEach(button => {
    button.addEventListener("click", () => {
        hideAllDivs();
        
        const targetClass = idToClassMap[button.id];
        const targetDiv = document.querySelector(targetClass);
        
        if (targetDiv) {
            targetDiv.classList.remove(visible);
        }
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



function showSendTab() {
    home.classList.add("hidden");
    sendTab.classList.remove("hidden");
}

function confirmTransaction() {
    receiver_info.classList.add("off-screen", "transition");
    confirm_trans.classList.remove("hidden");
}

function completeTransaction() {
    success_screen.classList.remove("hidden");
    success_screen.classList.add("transition");
    success_screen.style.marginLeft = "50%";
    confirm_trans.style.marginLeft = "1198px";

    setTimeout(() => {
        success_screen.classList.add("hidden");
        success_screen.style.marginLeft = "-50%";
        receiver_info.classList.remove("off-screen");
        confirm_trans.classList.add("hidden");
    }, 5000);
}

sendMoney.addEventListener("click", showSendTab);
confirm_button.addEventListener("click", confirmTransaction);
send_button.addEventListener("click", completeTransaction);



