const img = document.querySelector('div');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    img.classList.toggle('on');
    img.classList.toggle('off');
    const text = btn.innerText;
    btn.innerText = text === "On" ? "Off" : "On"
});