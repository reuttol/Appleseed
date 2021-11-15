setTimeout(stop, 3000);
setTimeout(resume, 8000);
setTimeout(stop, 9000);

let startTime = Date.now();
let passedTime = 0;
const timer = () => {
    const elapsed = new Date(Date.now() - startTime - passedTime);
    console.log(`${elapsed.getMinutes()}:${elapsed.getSeconds()}:${Math.floor(elapsed.getMilliseconds()/10)}`);
};

let intId = setInterval(timer, 10);

function stop(){
    clearInterval(intId);
    passedTime = Date.now();
}

function resume(){
    intId = setInterval(timer, 10);
    passedTime = Date.now() - passedTime;
}