const baseURL = 'https://api.github.com/users/';
const searchBtn = document.querySelector('.search');
const input = document.querySelector('.name');

const users = [];

searchBtn.addEventListener('click', getGithubUser);
input.addEventListener('keydown', pressEnter, false);

function pressEnter(event){
    event.key === 'Enter' ? getGithubUser() : event.key;
}

async function getGithubUser(){
    document.querySelector('.error-display').innerText = '';
    
    try{
        const response = await fetch(baseURL + input.value);
        if(!response.ok)
            throw Error("User Doesn't exists!");
        
        const user = await response.json();
        if(users.includes(user.id))
            throw Error("User already found!")
        
        users.push(user.id);
        createCard(user); 

    }catch(e){
        displayError(e.message);        
    }
    input.value = '';
}

function createCard(user){
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
        
    const tag = document.createElement('a');
    tag.href = user.html_url;

    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    imgContainer.classList.add('img-container');
    img.src = user.avatar_url;

    const name = document.createElement('h4');
    name.innerText = user.name;
    
    const repos = document.createElement('h5');
    repos.innerText = `Reposetories: ${user.public_repos}`;
  
    cardContainer.appendChild(tag);
    tag.appendChild(imgContainer);
    imgContainer.appendChild(img);
    tag.appendChild(name);
    tag.appendChild(repos);
    
    const resultContainer = document.querySelector('.results-container');
    resultContainer.appendChild(cardContainer);
}

function displayError(msg){
    document.querySelector('.error-display').innerText = msg;
}