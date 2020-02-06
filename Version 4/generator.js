const btnGenerate = document.getElementById("btnGeneratePassword");
const txtResult = document.getElementById("result");
const txtPWLength = document.getElementById("txtPWLength");


btnGenerate.addEventListener('click', function(){
    // Get PW Length
    const length = (txtPWLength.value);
    if(!isNaN(length)  && length < 130) {
        let out = "";
        let limits = [];
        for(let x = 0; x < length; x++){
            if($('#specialChars').prop('checked')){
                limits.push("special");
            } 
            if($('#numbers').prop('checked')){
                limits.push("numbers");
            } 
            if($('#upperChars').prop('checked')){
                limits.push("upper");
            }
            
            //Generate random number within proper boundaries
            let num = generatePWCharacter(limits);
            
            out += String.fromCharCode(num);
        }
        console.log(out);
        txtResult.innerHTML = "<h1>" + out + "</h1>";
        writeToClipBoard(out);
    } else {
        console.log("error");
        alert("Error. Must be a number less than 129.")
    }
});

function writeToClipBoard(text){
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
        alert("Copied " + text + " to clipboard.");
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
}

function generatePWCharacter(limits){
    let scratch = [60,62];
    limits.forEach(
        function(item,index){
            if(item == "special"){          scratch.push(33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126);
        }   
            if(item == "numbers"){
            scratch.push(48,49,50,51,52,53,54,55,56,57);
            }
            
            if(item == "upper"){
            scratch.push(65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90);
            }
        });
    let status = "X";
    let num = 0;
    while(status == "X"){
        num = randomNumber(33,126)
        if(!scratch.includes(num)){
            status = "Y";
        }
    }
    return(num);
}


function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  