const hamburger = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const h1 = document.querySelector('h1');

function menu (){
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
    h1.classList.toggle('show');
}

hamburger.addEventListener('click',menu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
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
        templeName: "Papeete Tahiti",
        location: "Papeete, Tahiti",
        dedicated: "1983, October, 27",
        area: 12150,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/papeete-tahiti/320x200/papeete-tahiti-temple-1232272-wallpaper.jpg"
      },
      {
        templeName: "Hong Kong China",
        location: "Kowloon City, Hong Kong",
        dedicated: "1996, May, 26",
        area: 51921,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x640/hong-kong-china-temple-lds-39528-wallpaper.jpg"
      },
      {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/320x200/paris-france-temple-exterior-1905503.jpg"
      },
    
  ];

const div = document.querySelector(".temples");

const displayTemples = (filteredTemples) => {
    div.innerHTML = ""; 
    filteredTemples.forEach(temple => {
        const figure = document.createElement("figure");
        const section = document.createElement("section");
        const templeName = document.createElement("h3");
        templeName.innerHTML = `${temple.templeName}`;
        const location = document.createElement("p");
        location.innerHTML = `Location: ${temple.location}`;
        const dedication = document.createElement("p");
        dedication.innerHTML = `Dedicated: ${temple.dedicated}`;
        const area = document.createElement("p");
        area.innerHTML = `Size: ${temple.area} sq ft`;

        const picture = document.createElement("img");
        picture.setAttribute("src", temple.imageUrl);
        picture.setAttribute("alt", temple.templeName);
        picture.setAttribute("loading", "lazy");
        picture.setAttribute("width", "400");
        picture.setAttribute("height", "250");

        section.appendChild(templeName);
        section.appendChild(location);
        section.appendChild(dedication);
        section.appendChild(area);
        figure.appendChild(picture);
        section.appendChild(figure);

        div.appendChild(section);
    });
}

displayTemples(temples);

const homeTemplesLink = document.querySelector("#home");
const oldTemplesLink = document.getElementById("old");
const newTemplesLink = document.querySelector("#new");
const largeTemplesLink = document.querySelector("#large");
const smallTemplesLink = document.querySelector("#small");


oldTemplesLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900));
});

newTemplesLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000));
});

largeTemplesLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => temple.area > 90000));
});

smallTemplesLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => temple.area < 10000));
});

homeTemplesLink.addEventListener("click", () => {
    displayTemples(temples);
});

