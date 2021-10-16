// log in button event handler
const logIn = document.getElementById("submitBtn");
logIn.addEventListener('click', function () {
    console.log(logIn);
    const logInArea = document.getElementById("contain");
    logInArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
//deposit button event handler
const deposit = document.getElementById("depositBtn");
deposit.addEventListener('click', function () {
    const depoAmount = parseFloat(document.getElementById("depositAmount").value);
    const depositCalculate = document.getElementById("depo-calculate");
    depositCalculate.innerHTML =parseFloat(document.getElementById("depo-calculate").innerText)+depoAmount;
    document.getElementById("balance").innerHTML=parseFloat(document.getElementById("balance").innerText)+depoAmount;


})
    //withdraw button event handler
    const withdraw = document.getElementById("withdrawBtn");
    withdraw.addEventListener('click', function () {
        const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
        const withCalculate = document.getElementById("with-calculate");
        withCalculate.innerHTML =parseFloat(document.getElementById("with-calculate").innerText)+ withdrawAmount;
        document.getElementById("balance").innerHTML=parseFloat(document.getElementById("balance").innerText)-withdrawAmount;
    })

    // balance event handler


