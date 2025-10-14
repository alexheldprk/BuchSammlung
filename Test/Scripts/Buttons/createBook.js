/*Seite Laden*/
document.addEventListener("DOMContentLoaded", function () {

    /*Referenziere Elemente aus HTML Formular*/
    const popup = document.getElementById("popupFormular");
    const oeffnenButton = document.getElementById("oeffnePopup");
    const schliessenButton = document.querySelector(".schliessen");
    const abbrechenButton = document.getElementById("abbrechen");
    const formular = document.getElementById("buchform");

    /*popup aufrufen/anzeigen*/
    function popupOeffnen() {
        popup.style.display = "block";
    }

 /*   popup schliessen/ausblenden*/
    function popupSchliessen() {
        popup.style.display = "none";
    }

    if (oeffnenButton) {
        oeffnenButton.addEventListener("click", popupOeffnen);
    }

    if (schliessenButton) {
        schliessenButton.addEventListener("click", popupSchliessen);
    }



})