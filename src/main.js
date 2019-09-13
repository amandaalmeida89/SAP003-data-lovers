const yearSelect = document.getElementById("year");
const transportSelect = document.getElementById("transport");

//cria os options dentro do primeiro seletor
const createYearsOption = year => {
  const newOption = document.createElement("option");
  newOption.innerText = year;
  newOption.value = year;
  yearSelect.appendChild(newOption);
};
//Popular os anos dentro do primeiro select
const fillYears = () => {
  const years = window.filterData.yearInjuries();
  years.forEach(createYearsOption);
};

//cria os opstions dentro do segundo seletor
const createTransportOption = transport => {
  const newOption = document.createElement("option");
  newOption.innerText = transport;
  newOption.value = transport;
  transportSelect.appendChild(newOption);
};
//Popula os options dentro do segundo select
const fillTransport = () => {
  const transports = window.filterData.getInjuries();
  transports.forEach(createTransportOption);
}
//Escuta as funções no evento load
window.addEventListener("load", fillTransport);
window.addEventListener("load", fillYears);

//Escuta as funções no click
document.getElementById("btn").addEventListener("click", () => {
  const yearSelected = yearSelect.value;
  const transportSelected = transportSelect.value;
  const result = window.filterData.filterByYear(yearSelected);
  document.getElementById("result").innerText = "This mode of transport had in the selected year " +  result[transportSelected] + " people injured.";
  event.preventDefault();
})

