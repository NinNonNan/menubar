console.log("Script caricato correttamente");

fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    let allowedIP = "79.12.163.14"; // Sostituisci con il tuo IP
    console.log("IP rilevato:", data.ip); // Log dell'IP rilevato

    if (data.ip === allowedIP) {
        // Se l'IP è corretto, mostra il contenuto
        document.getElementById("page-content").style.display = "block";
    } else {
        // Se l'IP non è corretto, reindirizza
        window.location.href = "/index2.html"; // Reindirizza alla pagina alternativa
    }
  })
  .catch(error => console.error("Errore nel recupero IP:", error));
