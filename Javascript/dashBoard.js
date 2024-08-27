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

function applyDarkMode() {
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
function toggleVisibility(){
    myAccountDivs.forEach(accountDivs => {
        accountDivs.classList.add(visible)
    })
}

toggleVisibility();
myAccountDivs.forEach( accountDivs => {
    accountDivs.addEventListener("click", () => {
        accountDivs.classList.toggle(visible);
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



