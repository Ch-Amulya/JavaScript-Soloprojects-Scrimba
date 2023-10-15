/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const displayEl = document.getElementById("display-el");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

let meter = 3.281;
let liter = 0.264;
let kg = 2.204;


convertBtn.addEventListener('click', function(){
    length.innerHTML = `${displayEl.value} meters = ${(displayEl.value * meter).toFixed(3)} feet | feet = ${(displayEl.value / meter).toFixed(3)} meters`;
    volume.innerHTML = `${displayEl.value} liters = ${(displayEl.value * liter).toFixed(3)} gallons | gallons = ${(displayEl.value / liter).toFixed(3)} liters`;
    mass.innerHTML = `${displayEl.value} kilos = ${(displayEl.value * kg).toFixed(3)} pounds | pounds = ${(displayEl.value / kg).toFixed(3)} kilos`;
    displayEl.value ="";
})