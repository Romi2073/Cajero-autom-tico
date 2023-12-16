const accounts = [
    {usuario: "Romina Loyda", saldo: 500, password: "Romifeliz73"},
    {usuario: "Monse García", saldo: 600, password: "Chofris02"},
    {usuario: "Elvia Arenas", saldo: 850, password: "12345"},
];

 
 
 document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  // Validar y redireccionar

  const user = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    
    const cuentaEncontrada = accounts.find(account => account.usuario === user && account.password === password);
      
  
    if (cuentaEncontrada) {
        document.getElementById("message").innerHTML = "Credenciales Válidas";
        localStorage.setItem('currentUser', JSON.stringify(cuentaEncontrada));
        window.location.href = "./saldo.html";
    }else{
        document.getElementById("message").innerHTML = "Credenciales Inválidas";  
        localStorage.removeItem('currentUser');
    }

});



