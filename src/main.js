import { INJURIES } from "./data/injuries/injuries.js";
window.data = INJURIES;

const data = INJURIES;
const firstYearSelect = document.getElementById("firstFillYears");
const secondYearSelect = document.getElementById("secondFillYears");
const selectSortBy = document.getElementById("sortBy");
const selectSortOrder = document.getElementById("sortOrder");
const form = document.getElementById("filterSelect");
const divResults = document.getElementById("results");

const pupulateYears = () => {
  const years = window.filterData(data);
  const options = years.map(item => `<option value="${item.year}">${item.year}</option>`);

  firstYearSelect.innerHTML += options.join("");
  secondYearSelect.innerHTML += options.reverse().join("");
};

const createCards = items => {
  const cards = items.map(item => `
    <div class="a">
      <p>Year: ${item.year}</p>
      <p>Airplane: ${item.airplane || 0}</p>
      <p>Boat: ${item.boat || 0}</p>
      <p>Auto: ${item.auto || 0}</p>
      <p>Motorcycle: ${item.motorcycle || 0}</p>
      <p>Bicycle: ${item.bicycle || 0}</p>
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
  const sortBySelected = selectSortBy.value;
  const sortOrderSelected = selectSortOrder.value;
  const resultsFilter = window.filterData(data, firstYearSelected, secondYearSelected);
  const resultsOrder = window.sortData(resultsFilter, sortBySelected, sortOrderSelected);
  if (secondYearSelected >= firstYearSelected) {
    createCards(resultsOrder);
  }
  else {
    alert("Second year is expected to be at or above");
  }
  event.preventDefault();
});