document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('status');

  if (status === 'success') {
    alert('¡Mensaje enviado con éxito!');
  } else if (status === 'error') {
    alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
  }
});
