document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
  
    alert("Gracias por contactarnos, " + nombre + ". Tu mensaje ha sido enviado.");
    document.getElementById("formContacto").reset();
  });
  