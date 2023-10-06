let homeDisplay = document.getElementById("home-display");
let guestDisplay = document.getElementById("guest-display");

let home1Btn = document.getElementById("home1-btn");
let home2Btn = document.getElementById("home2-btn");
let home3Btn = document.getElementById("home3-btn");

let guest1Btn = document.getElementById("guest1-btn");
let guest2Btn = document.getElementById("guest2-btn");
let guest3Btn = document.getElementById("guest3-btn");

let newGameel = document.getElementById("new-game");

let homeCount = 0;

home1Btn.addEventListener('click', function(){
     homeCount += 1;
     homeDisplay.textContent = homeCount;
})

home2Btn.addEventListener('click', function(){
     homeCount += 2;
     homeDisplay.textContent = homeCount;
})

home3Btn.addEventListener('click', function(){
    homeCount += 3;
    homeDisplay.textContent = homeCount;
})

let guestCount = 0;

guest1Btn.addEventListener('click', function(){
    guestCount += 1;
    guestDisplay.textContent = guestCount;
})

guest2Btn.addEventListener('click', function(){
    guestCount += 2;
    guestDisplay.textContent = guestCount;
})

guest3Btn.addEventListener('click', function(){
    guestCount += 3;
    guestDisplay.textContent = guestCount;
})

newGameel.addEventListener('click', function(){
    homeDisplay.textContent = 0;
    guestDisplay.textContent = 0;
})

