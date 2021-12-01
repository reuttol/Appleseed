const submitBtn  = document.querySelector("#submit");
const nameu = document.querySelector('#username');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const container = document.querySelector('.confirm-container');

submitBtn.addEventListener("click", function(){
   container.style.visibility = "visible";
    const userName = document.querySelector('.user-name');
    const userEmail = document.querySelector('.user-email');
    const userAge = document.querySelector('.user-age');
    
    const confirmBtn = document.querySelector('.confirm');
    const backBtn = document.querySelector('.back');
    
    userName.innerText = `Name: ${nameu.value}`;
    userAge.innerText = `Age: ${age.value}`;
    userEmail.innerText = `Email: ${email.value}`;

    confirmBtn.addEventListener("click", confirm);
    backBtn.addEventListener("click", back);
});

function confirm(){
    nameu.value = "";
    email.value = "";
    age.value = "";
    container.style.visibility = "hidden";
}

function back(){
    container.style.visibility = "hidden";
}