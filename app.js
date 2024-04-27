const darkMod = document.querySelector("#darkMod");
const loader = document.querySelector(".loader");
darkMod.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

const select = document.querySelector("#cardList");

const selected = document.querySelector("#selecttt");
const map = `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${selected.value}`;
fetch(map)
  .then((res) => res.json())
  .then((obj) => {
    loader.classList.add("hidden");
    loader.classList.remove("loader");
    creatBox(obj.data);
    localStorage.setItem("countriesData", JSON.stringify(obj.data));
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });
  
selected.addEventListener("change", (e) => {
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${e.target.value}`
  )
    .then((res) => res.json())
    .then((obj) => {
      loader.classList.add("hidden");
      loader.classList.remove("loader");
      creatBox(obj.data);
    });
});

function creatBox(data) {
  cardList.innerHTML = "";
  data.forEach((item) => {
    const { capital, region, population, flags, name } = item;
    let li = document.createElement("li");

    li.classList.add("list-item");
    li.innerHTML = `
    <a href="./details.html?id=${name.slug}">
              <img class="imgFix" src="${flags.png}" alt="${flags.alt}">
      
              <h2 class="name">${name.common}</h2>
      
              <p> <span class="spann">Population:</span> ${population}</p>
      
              <p class = "region"><span class="spann">Region:</span>${region}</p>
      
              <p><span class="spann">Capital:</span>${capital}</p>
              </a>
              `;
    select.appendChild(li);
  });
}

function creatBox(data) {
  cardList.innerHTML = "";
  data.forEach((item) => {
    const { capital, region, population, flags, name } = item;
    let li = document.createElement("li");

    li.classList.add("list-item");
    li.innerHTML = `
    <a href="./details.html?id=${name.slug}">
              <img class="imgFix" src="${flags.png}" alt="${flags.alt}">
      
              <h2 class="name">${name.common}</h2>
      
              <p> <span class="spann">Population:</span> ${population}</p>
      
              <p class = "region"><span class="spann">Region:</span>${region}</p>
      
              <p><span class="spann">Capital:</span>${capital}</p>
             </a>
              `;
    select.appendChild(li);
  });
}

const input = document.querySelector("#input");
input.addEventListener("input", (e) => {
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${e.target.value}`
  )
    .then((res) => res.json())
    .then((obj) => {
      loader.classList.add("hidden");
      loader.classList.remove("loader");
      creatBox(obj.data);
    });

  cardList.innerHTML = "";
  data.forEach((item) => {
    const { capital, region, population, flags, name } = item;
    let li = document.createElement("li");

    li.classList.add("list-item");
    li.innerHTML = `
    
    
    <a href="./details.html?id=${name.slug}">
    <img class="imgFix" src="${flags.png}" alt="${flags.alt}">
    <h2 class="name">${name.common}</h2>
              <p> <span class="spann">Population:</span> ${population}</p>
      
              <p class = "region"><span class="spann">Region:</span>${region}</p>
      
              <p><span class="spann">Capital:</span>${capital}</p>
              </a>
              `;
    select.appendChild(li);
  });
});



