import {INJURIES} from "./data/injuries/injuries.js";

const data = INJURIES;
const firstYearSelect = document.getElementById("firstFillYears");
const secondYearSelect = document.getElementById("secondFillYears");
const form = document.getElementById("filterSelect");
const divResults = document.getElementById("results");

const createFirstsOption = a => {
  const newOption = document.createElement("option");
  newOption.innerText = a.year;
  newOption.value = a.year;
  firstYearSelect.appendChild(newOption);
};

const popularFirstYears = () => {
  const years = window.filterData.accidentGrouping(data);
  years.forEach(createFirstsOption);
};

window.addEventListener("load", popularFirstYears);

const createSecondOption = b => {
  const newOption = document.createElement("option");
  newOption.innerText = b.year;
  newOption.value = b.year;
  secondYearSelect.appendChild(newOption);
};

const popularSecondYears = () => {
  const years = window.filterData.accidentGrouping(data);
  years.forEach(createSecondOption);
};

window.addEventListener("load", popularSecondYears);

const createCard = c => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");
  const pFour = document.createElement("p");
  const pFive = document.createElement("p");
  p.innerText = "Year: " + c.year;
  pOne.innerText = "Airplane: " + c.airplane;
  pTwo.innerText = "Boat: " + c.boat;
  pThree.innerText = "Car: " + c.auto;
  pFour.innerText = "Motorcycle: " + c.motorcycle;
  pFive.innerText = "Bicycle: " + c.bicycle;
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

form.addEventListener("submit", () => {
  const firstYearSelected = firstYearSelect.value;
  const secondYearSelected = secondYearSelect.value;
  const results = window.filterData.accidentGrouping(data, firstYearSelected, secondYearSelected);
  divResults.innerHTML = " ";
  results.forEach(createCard);
  event.preventDefault();
});