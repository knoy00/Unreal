document.addEventListener("DOMContentLoaded", () => {

    //Parallax animation-----------------//
    window.addEventListener("scroll", () => {
        const pageFour_header = document.getElementById("pageFour_header");
        const pageFour_left = document.getElementById("pageFour_left");
        const ct_one = document.getElementById("ct_one");
        const ct_two = document.getElementById("ct_two");
        const ct_three = document.getElementById("ct_three");
        const ct_four = document.getElementById("ct_four");
        const header = document.getElementById("header");


        let value = window.scrollY;
        pageFour_header.style.marginLeft = value * 0.8 + "px";
        pageFour_left.style.marginLeft = value * 0.65 + "px";
        ct_one.style.marginLeft = "-" + value * 0.55 + "px";
        ct_two.style.marginLeft = "-" + value * 0.5 + "px";
        ct_three.style.marginLeft = "-" + value * 0.45 + "px";
        ct_four.style.marginLeft = "-" + value * 0.4 + "px";
    
    });

});