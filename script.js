function getRandomNumber(min, max) {
    return  Math.floor(Math.random() * (100 - 1)) + 1;
}


var guessNumber = getRandomNumber(1,100)

function guessNumberGame() {
    
    var ourNumber = prompt("Введи число: ");

    if (guessNumber > ourNumber) {
        alert('Число должно быть больше');
        return guessNumberGame();
    } else if (guessNumber < ourNumber) {
        alert('Число должно быть меньше');
        return guessNumberGame();
    } else {
        return alert('Вы угадали число')
    }
}

//guessNumberGame();
function reminder() {

    
 //   console.log("Ты здесь слишком долго");
}

//setTimeout(reminder, 3000);
function validForm() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    console.log(name);
    console.log(password);
    
    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /^[a-z0-9]{5,100}$/i;
    if (reg_name.test(name) == false) {
        alert("Ошибка в поле ФИО");
    }
    if (reg_password.test(password) == false) {
        alert("Ошибка в поле пароль");
    }
    
}

document.querySelector('.button').addEventListener("click", validForm)


