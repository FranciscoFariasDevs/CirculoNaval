document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (username === "admin" && password === "colocolo") {
      // Si las credenciales son correctas, redirecciona al usuario a la página principal
      window.location.href = "bienvenido.html";
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
  });
  