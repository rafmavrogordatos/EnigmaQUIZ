function getInputValues(input1,input2,input3){
var input1 = document.getElementById("input1").value;
var input2 = document.getElementById("input2").value;
var input3 = document.getElementById("input3").value;

var score = 0;

if (input1 == "Gold") {
    score += 1;
}
if (input2 == "Athens"){
    score +=1;
}
if (input3 == "Money"){
    score += 1;
}

result = `Your score is ${score} correct answers out of 3.`;
additional = "Congrats!!! You are the OP Enigma player";

document.getElementById("result").innerHTML = result;

if (score === 3){
    document.getElementById("bonus").innerHTML = additional;
}

}
