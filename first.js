const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    // Read the data and output
    const input1 = document.getElementById('first');
    // As a string treat hoga so convert it into number
    const number1 = Number(input1.value);


    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);



    // Output
    const result = number1+number2;
    const re = document.getElementById('result');
    re.textContent ="Result:" +result;
})

