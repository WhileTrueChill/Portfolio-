
const menuIcon = document.getElementById("menuIcon");

const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click",()=>{

navbar.classList.toggle("active");

});










let typed = new Typed("#element", {
    strings: [
        "Frontend Developer",
        "Full Stack Developer",
        "AI Enthusiast",
        "Web Designer"
    ],

    typeSpeed: 100,      // Typing speed
    backSpeed: 60,      // Delete speed
    backDelay: 1500,    // 1 sec rukega
    startDelay: 500,    // Start hone se pehle delay
    loop: true,         // Infinite loop
    showCursor: true,   // Cursor show karega
    cursorChar: ""     // Cursor
});

const check = document.getElementById("check");

check.addEventListener("change", function () {

    if(check.checked){
        console.log("ON");
    }else{
        console.log("OFF");
    }

});




