<script>
    console.log("Script caricato correttamente");

    // Funzione di redirect basata sulla lingua
    function redirectBasedOnLanguage() {
        const userLang = navigator.language || navigator.userLanguage;

        // Controlla la lingua del browser
        if (userLang.startsWith('it')) {
            // Redirect alla versione italiana
            window.location.href = '/it/menu'; // Cambia l'URL per la tua versione italiana
        } else if (userLang.startsWith('en')) {
            // Redirect alla versione inglese
            window.location.href = '/en/menu'; // Cambia l'URL per la tua versione inglese
        } else {
            // Redirect a una versione di fallback
            window.location.href = '/en/menu'; // URL di fallback
        }
    }

    // Funzione per il redirect alla versione corretta di "normal.html"
    function redirectToNormal() {
        const userLang = navigator.language || navigator.userLanguage;

        // Controlla la lingua del browser per "normal.html"
        if (userLang.startsWith('it')) {
            // Redirect alla versione italiana di normal.html
            window.location.href = '/it/normal.html'; // URL per la versione italiana
        } else {
            // Redirect alla versione inglese di normal.html (o altre lingue di fallback)
            window.location.href = '/en/normal.html'; // URL per la versione inglese
        }
    }

    // Fetch per ottenere l'IP
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            let allowedIP = "2.226.196.52"; // Sostituisci con il tuo IP
            console.log("IP rilevato:", data.ip); // Log dell'IP rilevato

            if (data.ip === allowedIP) {
                // Se l'IP è corretto, mostra il contenuto
                document.getElementById("page-content").style.display = "block";
                // Esegui il redirect in base alla lingua
                redirectBasedOnLanguage();
            } else {
                // Se l'IP non è corretto, reindirizza a normal.html con la lingua appropriata
                redirectToNormal();
            }
        })
        .catch(error => console.error("Errore nel recupero IP:", error));
</script>
