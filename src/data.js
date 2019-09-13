//informando que é data e pega o ANO
const yearInjuries = () =>
  INJURIES
    .map(inj => new Date(inj.Year))
    .map(date => date.getFullYear());

const getInjuries = () =>
  Object.keys(INJURIES[0]).filter(item => item != "Year");

const filterByYears = years =>
  INJURIES.filter(item => {
    const date = new Date(item.Year);
    return years.includes( date.getFullYear().toString() );
  })

window.filterData = {
  yearInjuries: yearInjuries,
  getInjuries: getInjuries,
  filterByYears: filterByYears,
};

window.sortData = {
};

window.computeStats = {
};



