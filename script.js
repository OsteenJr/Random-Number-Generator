const myBtn = document.getElementById("mybutton");
const labelOne = document.getElementById("label1");
const labelTwo = document.getElementById("label2");
const labelThree = document.getElementById("label3");

const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;



myBtn.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;
    labelOne.textContent = randomNumber1;
    labelTwo.textContent = randomNumber2;
    labelThree.textContent = randomNumber3;

}
