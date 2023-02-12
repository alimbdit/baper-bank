document.getElementById('submit-btn').addEventListener('click', function(){
    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;

    if(email === 'baper@bank.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vule gesos!!! toke tejjo sontan ghusona korlam.');
    }

});