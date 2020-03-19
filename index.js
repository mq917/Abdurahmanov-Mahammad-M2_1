
document.getElementById('butt').onclick = result;
function result() {
    let startAmount = Number(document.getElementById('s').value);
    let amountOfMonth = Number(document.getElementById('m').value);
    let depositYield = Number(document.getElementById('p').value);
    let depositTermDay = Number(document.getElementById('t').value);
    if (startAmount < 0) {
        document.getElementById('str').innerHTML = ("nachalnaya summa ukazano nepravilno");
        return;
    } 
    if (amountOfMonth < 0) {
        document.getElementById('str').innerHTML = ("summa popolnenie vvedono ne pravilno");
        return;
    }
    if (depositYield < 0) {
        document.getElementById('str').innerHTML = ("nepravilnoy format protsentov");
        return;
    }
    if (depositTermDay < 0) {
        document.getElementById('str').innerHTML = ("srok vveden nepravilno");
        return;
    }

    let a = Math.floor(depositTermDay / 30);
    for (let k = 0; k < a; k++) {
        startAmount = startAmount + amountOfMonth + startAmount * depositYield / 100 / 12;
    }
    document.getElementById('str').innerHTML = startAmount;
}
