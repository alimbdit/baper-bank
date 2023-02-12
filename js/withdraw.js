

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step 1: get value from input field

    const withdrawAmountString = document.getElementById('withdraw-field').value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    // step 7:set the withdraw input field empty
    document.getElementById('withdraw-field').value = '';

    if(isNaN(withdrawAmount)){
        alert('Please Enter Valid Number!!')
        return;
    }
    
    // step 2: get the inner text from withdraw field

    const withdrawElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawElement.innerText;
    const withdrawTotalPrevious = parseFloat(withdrawTotalString);


    
   


    // step 4: get the total balance
    const previousTotalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = previousTotalBalanceElement.innerText;

    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    if(withdrawAmount > previousTotalBalance){
        alert("Baper Bank a eto Taka nai!!")
        return;
    }

     // step 3: calculate the total withdraw
     const totalWithdraw = withdrawAmount + withdrawTotalPrevious;
     withdrawElement.innerText = totalWithdraw ;

    // step 5: calculate current balance
    const currentBalance = previousTotalBalance - withdrawAmount;

    // step 5-1: set the current balance as all over total balance
    previousTotalBalanceElement.innerText = currentBalance;


    

})