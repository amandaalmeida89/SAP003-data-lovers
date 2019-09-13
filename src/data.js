//informando que é data e pega o ANO
const yearInjuries = () =>
  INJURIES
    .map(inj => new Date(inj.Year))
    .map(date => date.getFullYear());

const getInjuries = () =>
  Object.keys(INJURIES[0]).filter(item => item != "Year");

const filterByYear = year =>
  INJURIES.filter(v => {
    const date = new Date(v.Year);
    return date.getFullYear() == year;
  })
  .pop()

window.filterData = {
  yearInjuries: yearInjuries,
  getInjuries: getInjuries,
  filterByYear: filterByYear,
};

window.sortData = {
};

window.computeStats = {
};



