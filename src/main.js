import {INJURIES} from "./data/injuries/injuries.js";
window.data = INJURIES;

const data = INJURIES;
const firstYearSelect = document.getElementById("firstFillYears");
const secondYearSelect = document.getElementById("secondFillYears");
const form = document.getElementById("filterSelect");
const divResults = document.getElementById("results");

const pupulateYears = () => {
  const years = window.filterData(data);
  const options = years.map(item => `<option value="${item.year}">${item.year}</option>`);

  firstYearSelect.innerHTML = options.join("");
  secondYearSelect.innerHTML = options.reverse().join("");
};

const createCards = items => {
  const cards = items.map(item => `
    <div class="a">
      <p>Year: ${item.year}</p>
      <p>Airplane: ${item.airplane}</p>
      <p>Boat: ${item.boat}</p>
      <p>Car: ${item.auto}</p>
      <p>Motorcycle: ${item.motorcycle}</p>
      <p>Bicycle: ${item.bicycle}</p>
    </div>
  `).join("");

  divResults.innerHTML = cards;
};

const injuriesScreen = () => {
  const getObjectInjuries = window.filterData(data);
  createCards(getObjectInjuries);
};

window.addEventListener("load", pupulateYears);
window.addEventListener("load", injuriesScreen);

form.addEventListener("submit", () => {
  const firstYearSelected = firstYearSelect.value;
  const secondYearSelected = secondYearSelect.value;
  const results = window.filterData(data, firstYearSelected, secondYearSelected);
  createCards(results);
  event.preventDefault();
});