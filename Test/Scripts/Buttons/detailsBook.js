/*Seite Laden*/
document.addEventListener("DOMContentLoaded", function () {

    /*Referenziere Elemente aus HTML Formular*/
    const popup = document.getElementById("detailsPopup");
    const oeffnenButton = document.querySelector(".detailsButton");
    const schliessenButton = document.querySelector(".detailsclose");
    const abbrechenButton = document.getElementById("closedetails");


    /*popup aufrufen/anzeigen Funktion+Aufruf*/
    function popupOeffnen() {
        popup.style.display = "block";
    }

    if (oeffnenButton) {
        oeffnenButton.addEventListener("click", popupOeffnen);
    }

    /*popup schließen/ausblenden Funktion*/
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

});