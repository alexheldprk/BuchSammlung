/*Seite laden*/
document.addEventListener("DOMContentLoaded", function () {

    /*Referenziere Elemente aus HTML Formular*/
    const popup = document.getElementById("editPopup");
    const oeffnenButton = document.querySelector(".editButton");
    const schliessenButton = document.querySelector(".editclose");
    const abbrechenButton = document.getElementById("abbrechen");
    const formular = document.getElementById("buchform");

    /*popup aufrufen/anzeigen Funktion+Aufruf*/
    function popupOeffnen() {
        popup.style.display = "block";
    }

    if (oeffnenButton) {
        oeffnenButton.addEventListener("click", popupOeffnen);
    }

    /*   popup schliessen/ausblenden*/
    function popupSchliessen() {
        popup.style.display = "none";
    }

    /*schließen und abbrechen buttons funktionen verknüpft (aufruf)*/

    if (schliessenButton) {
        schliessenButton.addEventListener("click", popupSchliessen);
    }
    if (abbrechenButton) {
        abbrechenButton.addEventListener("click", popupSchliessen);
    }

    /*Schließen bei klick neben das popup*/

    if (popup) {
        popup.addEventListener("click", function (event) {
            if (event.target == popup) {
                popupSchliessen();
            }
        });
    }

    /*Formular absenden*/

    if (formular) {
        formular.addEventListener("submit", function (event) {
            event.preventDefault();                              /*seite nicht neu laden*/

            /*Werte auslesen*/
            const titel = document.getElementById("titel")?.value || "";
            const autor = document.getElementById("autor")?.value || "";
            const isbn = document.getElementById("isbn")?.value || "";
            const jahr = document.getElementById("jahr")?.value || "";

            /*Validierung*/
            if (!titel.trim() || !autor.trim() || !isbn.trim()) {
                alert("Bitte trage Titel, Author und ISBN ein.");
                return;
            }

            if (isNaN(jahr) || parseInt(jahr) < 0) {
                alert("Jahr muss über 0 liegen.");
                return;
            }

            /*PLATZHALTER FÜR DB AUFRUF*/

        });

    }
})