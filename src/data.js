//informando que é data e pega o ANO
const yearInjuries = () =>
  INJURIES
    .map(inj => new Date(inj.Year))
    .map(date => date.getFullYear());

const getInjuries = () =>
  Object.keys(INJURIES[0]).filter(item => item != "Year");

const valueInjuries = () => 
  INJURIES.map(elem => {
    delete elem.Year;
    return Object.values(elem);
  })


window.filterData = {
  yearInjuries: yearInjuries,
  getInjuries: getInjuries,
  valueInjuries: valueInjuries,

};

window.sortData = {
};

window.computeStats = {
};



