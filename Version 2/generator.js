const btnGenerate = document.getElementById("btnGeneratePassword");
const txtResult = document.getElementById("result");
const txtPWLength = document.getElementById("txtPWLength");

btnGenerate.addEventListener('click', function(){
    // Get PW Length
    const length = (txtPWLength.value);
    if(!isNaN(length)) {
        let out = "";
        for(let x = 0; x < length; x++){
            //Generate a random number between 33 and 126
            let num = randomNumber(33,126);
            out += String.fromCharCode(num);
        }
        console.log(out);
        txtResult.innerHTML = "<h1>" + out + "</h1>";
    } else {
        console.log("error");
    }
});

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  