const currentUser = JSON.parse(localStorage.getItem('currentUser'));
let saldo = currentUser.saldo;

document.getElementById("title_user").innerHTML = currentUser.usuario;

document.getElementById("btn-consultar").addEventListener('click', function () {
    document.getElementById("form-add").style.visibility = "hidden";
    document.getElementById("form-out").style.visibility = "hidden";
    document.getElementById("message").innerHTML = `Tu saldo actual es: ${saldo}`;
});


document.getElementById("btn-monto").addEventListener('click', function () {
    document.getElementById("form-add").style.visibility = "visible";
    document.getElementById("form-out").style.visibility = "hidden"
});

document.getElementById("btn-retirar").addEventListener('click', function () {
    document.getElementById("form-add").style.visibility = "hidden";
    document.getElementById("form-out").style.visibility = "visible"
});

const formAdd = document.getElementById("form-add");
const formOut = document.getElementById("form-out");

formAdd.addEventListener("submit", function (event) {
    event.preventDefault();

    const balance = parseInt(document.getElementById("input-add").value);

if (balance > 0) {
    if (saldo + balance > 990) {
        document.getElementById("message").innerHTML = "¡Límite de crédito excedido!";
    document.getElementById("input-add").value = "";
    } else {
        saldo += balance;
        document.getElementById("message").innerHTML = `Tu nuevo saldo es: ${saldo}`;
        document.getElementById("input-add").value = "";
    }
} else { 
    document.getElementById("message").innerHTML = "Ingresa una cantidad mayor";
    document.getElementById("input-add").value = "";
    }
});

formOut.addEventListener("submit", function (event) {
    event.preventDefault();

    const balance = parseInt(document.getElementById("input-out").value);

if (balance > 0) {
    if (saldo - balance < 10) {
        document.getElementById("message").innerHTML = "¡No tienes saldo suficiente!";
    document.getElementById("input-out").value = "";
    } else {
        saldo -= balance;
        document.getElementById("message").innerHTML = `Tu nuevo saldo es: ${saldo}`;
        document.getElementById("input-out").value = "";
    }
} else { 
    document.getElementById("message").innerHTML = "Ingresa una cantidad mayor";
    document.getElementById("input-out").value = "";
    }
});

document.getElementById("btn-exit").addEventListener("click", function () {
    window.location.href = "./index.html";
    localStorage.removeItem("currentUser");
});