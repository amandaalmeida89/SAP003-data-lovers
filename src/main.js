import { INJURIES } from "./data/injuries/injuries.js";

const data = INJURIES;
const firstYearSelect = document.getElementById("firstFillYears");
const secondYearSelect = document.getElementById("secondFillYears");
const selectSortBy = document.getElementById("sortBy");
const selectSortOrder = document.getElementById("sortOrder");
const selectCalc = document.getElementById("totals");
const form = document.getElementById("selects");
const divResults = document.getElementById("results");
const reload = document.getElementById("btnReload");

const pupulateYears = () => {
  const years = window.filterData(data);
  const options = years.map(item => `<option value="${item.year}">${item.year}</option>`);

  firstYearSelect.innerHTML += options.join("");
  secondYearSelect.innerHTML += options.reverse().join("");
};

const createCards = items => {
  drawVisualization(items);
  // const cards = items.map(item => `
  //   <div class="a">
  //     <p>Year: ${item.year || "All selected"}</p>
  //     <p>Airplane: ${item.airplane || 0}</p>
  //     <p>Boat: ${item.boat || 0}</p>
  //     <p>Auto: ${item.auto || 0}</p>
  //     <p>Motorcycle: ${item.motorcycle || 0}</p>
  //     <p>Bicycle: ${item.bicycle || 0}</p>
  //   </div>
  // `).join("");

  // divResults.innerHTML = cards;
};

const drawVisualization = (items) => {
  console.log(items);

  const dataArr = [
    ["Year", "Airplane", "Boat", "Auto", "Motorcycle", "Bicycle"]
  ];

  items.forEach(item => {
    if (item.year) {
      dataArr.push([item.year.toString(), item.airplane, item.boat, item.auto, item.motorcycle, item.bicycle]);
    } else {
      dataArr.push([item.year, item.airplane, item.boat, item.auto, item.motorcycle, item.bicycle]);
    }
  });

  const data = google.visualization.arrayToDataTable(dataArr);

  const options = {
    title: "Total Injured Transportation People in the US",
    vAxis: {title: "Injuries People"},
    hAxis: {title: "Year"},
    seriesType: "bars",
    series: {5: {type: "line"} }
  };

  const chart = new google.visualization.ComboChart(divResults);
  chart.draw(data, options);
};

google.charts.load("current", {"packages": ["corechart"]});
google.charts.setOnLoadCallback(() => {
  drawVisualization(window.filterData(data));
});

window.addEventListener("load", pupulateYears);

form.addEventListener("change", () => {
  const firstYearSelected = firstYearSelect.value;
  const secondYearSelected = secondYearSelect.value;
  const sortBySelected = selectSortBy.value;
  const sortOrderSelected = selectSortOrder.value;
  const calcSelected = selectCalc.value;

  if (secondYearSelected >= firstYearSelected) {
    const resultsFilter = window.filterData(data, firstYearSelected, secondYearSelected);
    if (calcSelected === "total") {
      const total = window.computeStats.computeStatsTotal(resultsFilter);
      createCards([total]);
    }
    else if (calcSelected === "average") {
      const average = window.computeStats.computeStatsAverage(resultsFilter);
      createCards([average]);
    }
    else {
      const resultsOrder = window.sortData(resultsFilter, sortBySelected, sortOrderSelected);
      createCards(resultsOrder);
    }
  }
  else {
    alert("Second year is expected to be at or above");
  }
  event.preventDefault();
});

reload.addEventListener("click", () => {
  firstYearSelect.value = "";
  secondYearSelect.value = "";
  selectSortBy.value = "";
  selectSortOrder.value = "";
  selectCalc.value = "";
  injuriesScreen();
  event.preventDefault();
});
