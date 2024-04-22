document.addEventListener("DOMContentLoaded", function() {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;


    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});