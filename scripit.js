function calculateMaturityAmount(){

    const principle =parseFloat(document.getElementById('principle').value);
    const interestrate=parseFloat(document.getElementById('intrestRate').value);
    const tenure=parseFloat(document.getElementById('timePeriod').value);

    const maturityAmt= principle+(principle*interestrate*tenure)/100;

    document.getElementById('result').innerText= 'Maturity Amount: $'+maturityAmt.toFixed(2);
}

document.getElementById('calculatebtn').addEventListener('click',calculateMaturityAmount);