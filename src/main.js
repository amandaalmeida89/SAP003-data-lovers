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
  const yearSelected = pegarVariosAnos();
  const transportSelected = transportSelect.value;
  const results = window.filterData.filterByYears(yearSelected);
  for (const result of results) {
    const allResults = document.createElement("li")
    allResults.innerText = result.Year + " " + transportSelected + " " + result[transportSelected];
    document.getElementById("result").appendChild(allResults);
  }
  event.preventDefault();
})
//Retorna os anos em arrays
const pegarVariosAnos = () => {
  const year = yearSelect;
  const arr = [];
  const options = year && year.options;

  for (const opt of options) {
    if (opt.selected) {
      arr.push(opt.value);
    }
  }
  return arr;
}


