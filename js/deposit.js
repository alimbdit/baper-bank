//  step 1: click listener of the button
document.getElementById('deposit-btn').addEventListener('click', function(){

    // step 2: get the value form deposit input field
    const newDepositAmountString = document.getElementById('deposit-field').value;
    // step 3: get value from deposit-total in the deposit field
    const newDepositAmount = parseFloat(newDepositAmountString);
     // step 7: set the input field's value empty.
     document.getElementById('deposit-field').value = '';

    if(isNaN(newDepositAmount)){
        alert('Please Enter Valid Number!!')
        return;
    }

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step 4: assign the value from input field into the deposit field
    const currentTotalDeposit = newDepositAmount + previousDepositTotal; 

    depositTotal.innerText = currentTotalDeposit;

    //  step 5: balance update
    const balanceElement = document.getElementById('total-balance');
    const previousBalanceString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // set total balance
    const totalCurrentBalance = previousBalance + newDepositAmount;
    balanceElement.innerText = totalCurrentBalance;

   
})