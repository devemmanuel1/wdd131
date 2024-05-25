const productNameSelectLocator = document.querySelector("#productName");
const reviewCountLocator = document.querySelector("#reviewCount");
const formLocator = document.querySelector("#form");

let reviewCount = localStorage.getItem("reviewCount") || 0;

const products = [
    {
      id: "Mf-01-27",
      name: "Dangote Cement",
      averageRating: 4.5
    },
    {
      id: "mf- 01-30",
      name: "Superset Cement",
      averageRating: 4.7
    },
    {
      id: "mf- 01-90",
      name: "BUA Cement",
      averageRating: 3.5
    },
    {
      id: "mf- 01-76",
      name: "Unicem Cement",
      averageRating: 3.9
    },
    {
      id: "mf- 01-210",
      name: "POP Cement",
      averageRating: 5.0
    }
];

if (productNameSelectLocator) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.setAttribute("value", product.id);
      option.textContent = product.name;
      
      productNameSelectLocator.appendChild(option);
    });

}

if (formLocator) {
    formLocator.addEventListener("submit", () => {    
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);    
    });
}

if (reviewCountLocator) {
    reviewCountLocator.innerHTML = `Total reviews submitted: ${reviewCount}`;
}