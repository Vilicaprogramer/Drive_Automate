/*
  INSTRUCCIONES PARA CONECTAR TU APPS SCRIPT:
  1. Crea un Google Sheet y ve a Extensiones > Apps Script.
  2. Pega el código del servidor (ver más abajo) y despliégalo como "Aplicación web" (Acceso: Cualquiera).
  3. Pega la URL generada en la variable 'scriptURL' de abajo.
*/
const scriptURL = 'https://script.google.com/macros/s/TU_SCRIPT_ID_AQUI/exec';
const form = document.getElementById('automationForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', e => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando petición...';
    formStatus.style.display = 'none';

    // Datos del formulario
    const requestData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };

    // Envío por fetch (o simulado si no hay URL configurada aún)
    if(scriptURL.includes('TU_SCRIPT_ID_AQUI')) {
        // Simulación de éxito si el usuario todavía no ha configurado el Apps Script
        setTimeout(() => {
            formStatus.textContent = '¡Petición enviada con éxito! Nos pondremos en contacto contigo muy pronto.';
            formStatus.className = 'success-msg';
            formStatus.style.display = 'block';
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Petición de Automatización';
        }, 1000);
    } else {
        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(requestData),
            mode: 'no-cors' // Estándar para Apps Script web apps
        })
        .then(() => {
            formStatus.textContent = '¡Petición enviada con éxito! Te responderemos a la mayor brevedad.';
            formStatus.className = 'success-msg';
            formStatus.style.display = 'block';
            form.reset();
        })
        .catch(error => {
            formStatus.textContent = 'Hubo un error al enviar. Por favor, inténtalo de nuevo.';
            formStatus.className = 'error-msg';
            formStatus.style.display = 'block';
            console.error(error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Petición de Automatización';
        });
    }
});
