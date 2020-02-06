const btnGenerate = document.getElementById("btnGeneratePassword");
const txtResult = document.getElementById("result");

btnGenerate.addEventListener('click', function(){
    let out = "";
    for(let x = 0; x < 8; x++){
        //Generate a random number between 33 and 126
        let num = randomNumber(33,126)
        out += String.fromCharCode(num);
    }
    console.log(out);
    txtResult.innerHTML = "<h1>" + out + "</h1>";
});

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  