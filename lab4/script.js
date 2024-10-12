let rollCount = 0;

document.getElementById('rollButton').addEventListener('click', function() {
    
    const randomNum1 = Math.floor(Math.random() * 6) + 1;
    const randomNum2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').src = `img/dice${randomNum1}.png`;
    document.getElementById('dice2').src = `img/dice${randomNum2}.png`;

   
    rollCount++;
    document.getElementById('rollCounter').innerText = `Roll Count: ${rollCount}`;

    const sum = randomNum1 + randomNum2;
    
    let resultMessage = `You rolled a ${randomNum1} and a ${randomNum2}. Sum: ${sum}.`;
    if (randomNum1 === randomNum2) {
        resultMessage += " You rolled doubles!";
    }
    document.getElementById('result').innerText = resultMessage;
});
