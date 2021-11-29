

const inputs = [...document.querySelectorAll('input')];
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', submit);
inputs.forEach((elem)=>{
    elem.addEventListener('input', (event) => {
        if (elem.nextElementSibling)
            elem.nextElementSibling.focus();
        // if (inputs[inputs.length - 1].value)
        //   submit();
      });
});

// inputs.forEach((elem)=>{
    inputs[0].addEventListener('paste', (event) => {
        const text = event.clipboardData.getData('text');
        inputs.forEach((elem, index)=>{
            elem.value = text[index];       
        });
        inputs[inputs.length-1].focus();
      });
// });

function submit(){
    if(isFilled()){
        inputs.forEach((elem)=>{
            elem.value = '';
        });
        // window.alert("Submitted Successfully");
    }
    else
        console.log("njd");
        // window.alert("Please fill all input fields!");
}

function isFilled(){
    return inputs.every((elem)=> Boolean(elem.value));
}