console.log("Script caricato correttamente");

fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    console.log("IP attuale:", data.ip); // Mostra l'IP attuale che viene recuperato

    let allowedIP = "79.12.163.14"; // Modifica con l'IP che desideri
    if (data.ip !== allowedIP) {
      console.log("Reindirizzamento alla pagina alternativa..."); // Log prima del reindirizzamento
      window.location.href = "/index2.html"; // Reindirizza alla pagina alternativa
    } else {
      console.log("L'IP è corretto, nessun reindirizzamento"); // Log se l'IP è corretto
    }
  })
  .catch(error => {
    console.error("Errore nel recupero IP:", error); // Mostra eventuali errori
  });

console.log("Fetch completato");
