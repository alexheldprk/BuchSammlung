/*Seite Laden*/
document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("detailsPopup");
    const overlay = document.getElementById("popupOverlay");


    /*Öffnen*/
    document.getElementById("detailsButton")?.addEventListener("click", function () {
        if (popup) popup.style.display = "block";
        if (overlay) overlay.style.display = "block";
    });


    /*schliessen*/
    document.getElementById("closedetails")?.addEventListener("click", function () {
        if (popup) popup.style.display = "none";
        if (overlay) overlay.style.display = "none";
    });

});