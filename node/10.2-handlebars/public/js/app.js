console.log('Client side javascript file is loaded!')

const joke = document.querySelector('.joke')
const searchBtn = document.querySelector('button')

searchBtn.addEventListener('click', (e) => {
    fetch('http://localhost:3000/').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log("from public app",data);
                joke.textContent = data
            }
        })
    })
})