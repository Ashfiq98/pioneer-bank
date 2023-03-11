document.getElementById('login').addEventListener('click', function() {
        var email = document.getElementById('email-control').value;
        var password = document.getElementById('password-control').value;
        // var loginArea = document.getElementById('login-area');
        if (email === 'shaheen@gmail.com' && password === '123') {
            window.location.href = 'bank.html';
            // loginArea.style.display = 'none';
            // const TransactionArea = document.getElementById('transaction-area');
            // TransactionArea.style.display = 'block';
        } else {
            alert('Invalid e-mail or password, please try again!!')
        }
    })
    //