const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const container = document.querySelector('.smiley-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const num = parseInt(input.value);
    if(num){
        for(let i=0; i<num; i++){
            const img = document.createElement("img");
            img.src = "smiley.png";            
            img.classList.toggle('smiley');
            container.appendChild(img);
        }
    }
    else{
        const err = document.createElement("h4");
        err.setAttribute("id", "error");
        err.innerText = "Please enter only numbers!"
        container.appendChild(err);
    }
});