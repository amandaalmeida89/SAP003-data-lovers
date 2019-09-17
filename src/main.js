import {INJURIES} from "./data/injuries/injuries.js";
const data = INJURIES;
const yearSelect = document.getElementById("fillYears");
const divResults = document.getElementById("results");

const createYearsOption = a => {
  const newOption = document.createElement("option");
  newOption.innerText = a.year;
  newOption.value = a.year;
  yearSelect.appendChild(newOption);
};

const popularYears = () => {
  const years = window.filterData.accidentGrouping(data);
  years.forEach(createYearsOption);
};

window.addEventListener("load", popularYears);

const createCard = b => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");
  const pFour = document.createElement("p");
  const pFive = document.createElement("p");
  p.innerText = "Year: " + b.year;
  pOne.innerText = "Airplane: " + b.airplane;
  pTwo.innerText = "Boat: " + b.boat;
  pThree.innerText = "Car: " + b.auto;
  pFour.innerText = "Motorcycle: " + b.motorcycle;
  pFive.innerText = "Bicycle: " + b.bicycle;
  div.appendChild(p);
  div.appendChild(pOne);
  div.appendChild(pTwo);
  div.appendChild(pThree);
  div.appendChild(pFour);
  div.appendChild(pFive);
  div.setAttribute("class", "a");
  divResults.appendChild(div);
};

const injuriesScreen = () => {
  const getObjectInjuries = window.filterData.accidentGrouping(data);
  getObjectInjuries.forEach(createCard);
};

window.addEventListener("load", injuriesScreen);

document.getElementById("fillYears").addEventListener("change", () => {
  const yearSelected = yearSelect.value;
  const results = window.filterData.accidentGrouping(data, yearSelected);
  divResults.innerHTML = " ";
  results.forEach(createCard);
  event.preventDefault();
});