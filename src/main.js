import { INJURIES } from "./data/injuries/injuries.js";

const data = INJURIES;
const tableOrGraphic = document.getElementById("tableOrGraphic");
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

const createCards = (items, isTable) => {
  if (isTable === true) {
    drawTable(items);
  } else {
    drawVisualization(items);
  }
};

const drawVisualization = (items) => {
  console.log(items);

  const dataArr = [
    ["Year", "Airplane", "Boat", "Auto", "Motorcycle", "Bicycle"]
  ];

  items.forEach(item => {
    if (item.year) {
      dataArr.push([item.year.toString(), item.airplane || 0, item.boat || 0, item.auto || 0, item.motorcycle || 0, item.bicycle || 0]);
    } else {
      dataArr.push([item.year || "All selected", item.airplane || 0, item.boat || 0, item.auto || 0, item.motorcycle || 0, item.bicycle || 0]);
    }
  });

  const data = google.visualization.arrayToDataTable(dataArr);

  const options = {
    title: "Total Injured Transportation People in the US",
    vAxis: { title: "Injuries People", scaleType: "log" },
    hAxis: {
      slantedText: true,
    },
    seriesType: "bars",
    legend: {
      position: "top",
      alignment: "center",
    },
    bar: {
      groupWidth: "99%",
    },
    chartArea: {
      height: "80%",
      width: "88%",
      left: "10%",
    },
    series: { 5: { type: "line" } }
  };

  const chart = new google.visualization.ComboChart(divResults);
  chart.draw(data, options);
};

google.charts.load("current", { "packages": ["corechart", "table"] });
google.charts.setOnLoadCallback(() => {
  if (false) {
    drawVisualization(window.filterData(data));
  } else {
    drawTable(window.filterData(data));
  }
});

const drawTable = (items) => {
  console.log(items);

  const dataArr = [];

  items.forEach(item => {
    if (item.year) {
      dataArr.push([item.year.toString(), item.airplane || 0, item.boat || 0, item.auto || 0, item.motorcycle || 0, item.bicycle || 0]);
    } else {
      dataArr.push([item.year || "All selected", item.airplane || 0, item.boat || 0, item.auto || 0, item.motorcycle || 0, item.bicycle || 0]);
    }
  });

  console.log(dataArr);

  const data = new google.visualization.DataTable();
  data.addColumn("string", "Anos");
  data.addColumn("number", "Airplane");
  data.addColumn("number", "Boat");
  data.addColumn("number", "Auto");
  data.addColumn("number", "Motorcycle");
  data.addColumn("number", "Bicycle");
  data.addRows(dataArr);

  const cssClassNames = {tableCell: "tableRow", headerRow: "headerRow"};

  const options = {
    "allowHtml": true,
    "cssClassNames": cssClassNames,
    showRowNumber: false,
    width: "80%",
    height: "auto",
  };

  const table = new google.visualization.Table(divResults);

  table.draw(data, options);
};

window.addEventListener("load", pupulateYears);

form.addEventListener("change", () => {
  const tableOrGraphicSelected = tableOrGraphic.value;
  const firstYearSelected = firstYearSelect.value;
  const secondYearSelected = secondYearSelect.value;
  const sortBySelected = selectSortBy.value;
  const sortOrderSelected = selectSortOrder.value;
  const calcSelected = selectCalc.value;

  const typeCharts = (isTable) => {
    if (secondYearSelected >= firstYearSelected) {
      const resultsFilter = window.filterData(data, firstYearSelected, secondYearSelected);
      if (calcSelected === "total") {
        const total = window.computeStats.computeStatsTotal(resultsFilter);
        createCards([total], isTable);
      }
      else if (calcSelected === "average") {
        const average = window.computeStats.computeStatsAverage(resultsFilter);
        createCards([average], isTable);
      }
      else {
        const resultsOrder = window.sortData(resultsFilter, sortBySelected, sortOrderSelected);
        createCards(resultsOrder, isTable);
      }
    } else {
      alert("Second year is expected to be at or above");
    }
  };

  tableOrGraphicSelected === "tabela" ? typeCharts(true) : typeCharts(false); 
});

reload.addEventListener("click", () => {
  tableOrGraphic.value = "";
  firstYearSelect.value = "";
  secondYearSelect.value = "";
  selectSortBy.value = "";
  selectSortOrder.value = "";
  selectCalc.value = "";
  injuriesScreen();
  event.preventDefault();
});
