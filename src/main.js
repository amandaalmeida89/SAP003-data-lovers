const screenTableYear = document.getElementById("table");

const createTableYear = tableTd => {
  const newTd = document.createElement("td");
  newTd.innerText = tableTd;
  newTd.value = tableTd;
  screenTableYear.appendChild(newTd);
};

const allYers = () => {
  const b = window.filterData.yearInjuries();
  b.forEach(createTableYear);
}

window.addEventListener("load", allYers);

const screenTableYeTransport = document.getElementById("table");

const createTableTransport = tableTr => {
  const newTr = document.createElement("tr");
  newTr.innerText = tableTr;
  newTr.value = tableTr;
  screenTableYeTransport.appendChild(newTr);
};

const allInjuries = () => {
  const a = window.filterData.getInjuries();
  a.forEach(createTableTransport);
}

window.addEventListener("load", allInjuries);

  




