// document.addEventListener("DOMContentLoaded", function() {

//     // const currentYear = new Date().getFullYear();
//     let oLastModif = new Date(document.lastModified);
//     document.getElementById("currentYear").textContent = currentYear;


//     const lastModified = document.lastModified;
//     document.getElementById("lastModified").textContent = lastModified;
// });
// const currentYear = new Date().getFullYear(); 
// const yearElement = document.querySelector('#year');


const currentYear = new Date().getFullYear();

const copyrightParagraph = document.querySelector("currentyear");
copyrightParagraph.textContent = `© ${currentYear} Your Company Name`;

const lastModifiedDate = document.lastModified;

const lastModifiedParagraph = document.querySelector("currentyear(2)");
lastModifiedParagraph.textContent = `Last modified: ${lastModifiedDate}`;