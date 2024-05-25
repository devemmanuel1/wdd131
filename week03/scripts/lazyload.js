const currentYear = new Date().getFullYear();
const lastModifiedDate = new Date(document.lastModified);

document.getElementById('currentyear').innerText = currentYear;
document.getElementById('lastModified').innerText = "Last Modified: " + lastModifiedDate;