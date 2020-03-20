
document.getElementById('butt').onclick = result;
function result() {
    let startAmount = Number(document.getElementById('s').value);
    let amountOfMonth = Number(document.getElementById('m').value);
    let depositYield = Number(document.getElementById('p').value);
    let depositTermDay = Number(document.getElementById('t').value);
    if (startAmount < 0) {
        document.getElementById('str').innerHTML = ("начальная сумма указано неправильно");
        return;
    } 
    if (amountOfMonth < 0 || Number.isNaN(amountOfMonth)) {
        document.getElementById('str').innerHTML = ("сумма пополнения введено неправильно");
        console.log('wrong type');
        return NaN;
    }
    if (depositYield < 0 || Number.isNaN(depositYield)) {
        document.getElementById('str').innerHTML = ("неправильный формат процентовой ставки");
        console.log('wrong type');
        return NaN;
    }
    if (depositTermDay < 0 || Number.isNaN(depositTermDay)) {
        document.getElementById('str').innerHTML = ("срок введен неправильно");
        console.log('wrong type');
        return NaN;
    }

    let a = Math.floor(depositTermDay / 30);
    for (let k = 0; k < a; k++) {
        startAmount = startAmount + amountOfMonth + startAmount * depositYield / 100 / 12;
    }
    document.getElementById('str').innerHTML = startAmount;
}
