const screenTable = document.getElementById("table");

const createTableRow = arr => {
  const tr = document.createElement("tr");

  arr.forEach((val) => {
    const td = document.createElement("td");
    td.innerText = val;
    tr.appendChild(td);
  })

  screenTable.appendChild(tr);
};

const allYers = () => {
  const years = window.filterData.yearInjuries();
  years.unshift("People injured by transportation");
  createTableRow(years);
}


const allValues = () => {
  const values = window.filterData.valueInjuries();
  const allInjuries = window.filterData.getInjuries();
  const cols = [];
  
  for(const i in values) {
    for(const j in values[i]) {

      if(!cols[j]) {
        cols[j] = [ allInjuries[j] ];
      }

      cols[j].push( values[i][j] );

    }
  }

  cols.forEach(createTableRow);
}

window.addEventListener("load", allYers);
window.addEventListener("load", allValues);

