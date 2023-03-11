function updateSpanForDeposit(id, depositNumber) {
    var current = document.getElementById(id).innerText;
    var currentNumber = parseFloat(current);
    var totalAmount = currentNumber + depositNumber;
    document.getElementById(id).innerText = totalAmount;
}

function updateSpanForWithdraw(id, withdrawNumber, id2, reduceBalance) {
    var currentWithdraw = document.getElementById(id).innerText;
    var currentWithdrawNumber = parseFloat(currentWithdraw);
    var totalWithdrawAmount = currentWithdrawNumber + withdrawNumber;

    var balance = document.getElementById(id2).innerText;
    var balanceNumber = parseFloat(balance);
    var totalBalance = balanceNumber + reduceBalance;
    if (totalBalance < 0) {
        alert("Sorry! You don't have sufficient balance.....");
    } else {
        document.getElementById(id).innerText = totalWithdrawAmount;
        document.getElementById(id2).innerText = totalBalance;
    }
}


//Deposit Button EventHandler
document.getElementById('deposit-button').addEventListener('click', function() {
    var depositAmount = document.getElementById('deposit-amount');
    var depositNumber = parseFloat(depositAmount.value);
    if (depositNumber <= 0) {
        alert('Invalid amount! please enter valid amount...');
        depositAmount.value = '';
    } else {
        updateSpanForDeposit('current-deposit', depositNumber);
        updateSpanForDeposit('current-balance', depositNumber);
        depositAmount.value = '';
    }

})



//withdraw Button Eventhandler

document.getElementById('withdraw-button').addEventListener('click', function() {
    var withdrawAmount = document.getElementById('withdraw-amount');
    var withdrawAmountNumber = parseFloat(withdrawAmount.value);
    if (withdrawAmountNumber <= 0) {
        alert('Invalid amount. please! enter valid amount...');
        withdrawAmount.value = '';
    } else {
        updateSpanForWithdraw('current-withdraw', withdrawAmountNumber, 'current-balance', -1 * withdrawAmountNumber);
        withdrawAmount.value = '';
    }

})
var logout = document.getElementById('logout');
logout.style.marginTop = '30px';
logout.style.marginLeft = '700px'
logout.addEventListener('click', function() {
    var response = confirm("press ok for successfully logging out..");
    if (response) {
        window.location.href = 'index.html';
    }
    // console.log("pressing");
})