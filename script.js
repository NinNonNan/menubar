fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    let allowedIP = "79.12.163.14"; // Sostituisci con il tuo IP
    if (data.ip !== allowedIP) {
      window.location.href = "/index2.html"; // Reindirizza alla pagina alternativa
    }
  })
  .catch(error => console.error("Errore nel recupero IP:", error));
