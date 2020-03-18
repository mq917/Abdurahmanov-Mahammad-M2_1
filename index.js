
document.getElementById('butt').onclick = result;
function result() {
    let startAmount = Number(document.getElementById('s').value);
    let amountOfMonth = Number(document.getElementById('m').value);
    let depositYield = Number(document.getElementById('p').value);
    let depositTermDay = Number(document.getElementById('t').value);
    let a = Math.floor(depositTermDay / 30);
    let b = Math.floor(depositTermDay / 360);

    

    for (let i=0; i<b ; i++) {
            startAmount = startAmount + (startAmount * (depositYield / 100));    
    }

    console.log(startAmount);
        document.getElementById('str').innerHTML = Number(result);
}
