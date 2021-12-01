const checkbox = document.querySelector('#display-img');
const container = document.querySelector('.img-container');

checkbox.addEventListener('change', function(event){
    if(this.checked){
        const img = document.createElement("img");
        img.src = "smiley.png";            
        img.style.height = "100px";
        img.style.width = "100px";
        container.appendChild(img);
    }
    else{
        container.removeChild(container.children[0]);
    }
});