const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
const loader = document.querySelector(".loader");

const darkMod = document.querySelector("#darkMod");

darkMod.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

console.log(myParam);

fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${myParam}`)
  .then((res) => res.json())
  .then((data) => {
    loader.classList.remove("loader");
    loader.classList.add("hidden");
    creatBoxs(data);
  });

function creatBoxs({
  languages,
  currencies,
  region,
  subregion,
  cioc,
  population,
  capital,
  flags,
  name,
}) {
  const cardLists = document.getElementById("cardLists");

  cardLists.innerHTML = `
    <img class="imgFix" src="${flags.png}" alt="${flags.alt}">
        <div class="box-1">
            <h2> ${name.common}</h2>
            <p><span>Native Name:</span> ${name.nativeName}</p>
            <p> <span>Population:</span>${population}</p>
            <p><span>Region:</span>${region}</p>
            <p> <span>Sub Region:</span>${subregion}</p>
            <p><span>Capital:</span>${capital}</p>
        </div>
        <div class="box-2">
            <p> <span>Top Level Domain:</span>${cioc}</p>
            <p><span>Currencies:</span>${currencies}</p>
            <p><span>Languages:</span>${languages}</p>
        </div>
        
    `;
}
