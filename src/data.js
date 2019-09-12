//informando que é data e pega o ANO
const yearInjuries = () =>
  INJURIES
    .map(inj => new Date(inj.Year))
    .map(date => date.getFullYear());


const getInjuries = () =>
  Object.keys(INJURIES[0]).filter(item => item != "Year")


// let a = INJURIES.values();
// for (let valores of a) {
//   // console.log(valores)
// }

window.filterData = {
  yearInjuries: yearInjuries,
  getInjuries: getInjuries,
 
};

window.sortData = {
};

window.computeStats = {
};