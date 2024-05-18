const hambutton = document.querySelector('#hambutton');
const mainNav = document.querySelector('#navigation');

hambutton.addEventListener('click', () => {
    if(mainNav) {
    mainNav.classList.toggle('open');
    hambutton.classList.toggle('open');
    } else {
        console.error("mainNav not found");
    }
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/1-001db7326e638032470a02813c9e47191ef74b0e.jpeg"
      },  
      {
        templeName: "Campinas Brazil",
        location: "Campinas, São Paulo, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
      },
      {
        templeName: "São Paulo Brazil",
        location: "São Paulo, São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-756468-wallpaper.jpg"
      },  
];  

createTempleCard(temples);

function filterTemples(condition) {
    const filteredTemples = temples.filter(condition);
    createTempleCard(filteredTemples);
  }

  document.querySelector('#home').addEventListener('click', () => {
    createTempleCard(temples);
  });

  document.querySelector('#old').addEventListener('click', () => {
    filterTemples(temple => new Date(temple.dedicated).getFullYear() < 1900);
  });

  document.querySelector('#new').addEventListener('click', () => {
    filterTemples(temple => new Date(temple.dedicated).getFullYear() > 2000);
  });

  document.querySelector('#large').addEventListener('click', () => {
    filterTemples(temple => temple.area > 90000);
  });

  document.querySelector('#small').addEventListener('click', () => {
    filterTemples(temple => temple.area < 10000);
  });

  function createTempleCard(templesToShow) {
    const imagesContainer = document.querySelector('.imagesContainer');
    imagesContainer.innerHTML = '' 

    templesToShow.forEach(temple =>
        {
            let card = document.createElement("Section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);

            document.querySelector(".imagesContainer").appendChild(card);
        
        });
  }







//   const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
//   if(navigation) {
//     navigation.classList.toggle('open');
//     hamButton.classList.toggle('open');
//     } else {
//         console.error("navigation not found");
//     }  
// });