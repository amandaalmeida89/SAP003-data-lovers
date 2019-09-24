export const filterData = (data, filteredFirstYear, filteredSecondYear) =>
  data.map(item => {
    return {
      year: new Date(item.Year).getFullYear(),
      airplane: item.Total_Injured_Persons_Commuter_Carrier + item.Total_Injured_Persons_General_Aviation + item.Total_Injured_Persons_On_Demand_Air_Taxi + item.Total_Injured_Persons_US_Air_Carrier,
      boat: item.Total_Injured_Persons_Freight_Vessel + item.Total_Injured_Persons_Passenger_Vessel + item.Total_Injured_Persons_Recreational_Boating,
      auto: item.Total_Injured_Persons_Passenger_Or_Occupant + item.Total_Injured_Persons_Bus_Occupants + item.Total_Injured_Persons_Employee_Or_Worker + item.Total_Injured_Persons_Passenger_Car_Occupants + item.Total_Injured_Persons_Truck_Occupants_Large + item.Total_Injured_Persons_Truck_Occupants_Light + item.Total_Injured_Persons_Pedestrians,
      motorcycle: item.Total_Injured_Persons_Motorcyclists,
      bicycle: item.Total_Injured_Persons_Pedalcyclists,
    };
  }).filter(item => {
    if (filteredFirstYear && filteredSecondYear) {
      return (item.year >= filteredFirstYear && item.year <= filteredSecondYear);
    }
    else {
      return true;
    }
  });

const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => {
    if (!sortBy && !sortOrder) {
      return 0;
    }
    if (sortOrder == "desc") {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return -1;
    }
    else {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return -1;
    }
  });
};

const computeStatsTotal = (data) =>
  data.reduce((accumulator, currentValue) => {
    if (accumulator == 0) {
      return currentValue;
    }
    return {
      airplane: accumulator.airplane + currentValue.airplane,
      boat: accumulator.boat + currentValue.boat,
      auto: accumulator.auto + currentValue.auto,
      motorcycle: accumulator.motorcycle + currentValue.motorcycle,
      bicycle: accumulator.bicycle + currentValue.bicycle,
    };
  }, 0);

const computeStatsAverage = (data) =>
  data.reduce((accumulator, currentValue, index) => {
    if (index == 0) {
      return currentValue;
    }
    else if ((data.length - 1) == index) {
      return {
        airplane: parseInt((accumulator.airplane + currentValue.airplane) / data.length),
        boat: parseInt((accumulator.boat + currentValue.boat) / data.length),
        auto: parseInt((accumulator.auto + currentValue.auto) / data.length),
        motorcycle: parseInt((accumulator.motorcycle + currentValue.motorcycle) / data.length),
        bicycle: parseInt((accumulator.bicycle + currentValue.bicycle) / data.length),
      };
    }
    else {
      return {
        airplane: accumulator.airplane + currentValue.airplane,
        boat: accumulator.boat + currentValue.boat,
        auto: accumulator.auto + currentValue.auto,
        motorcycle: accumulator.motorcycle + currentValue.motorcycle,
        bicycle: accumulator.bicycle + currentValue.bicycle,
      }
    }
  }, 0);

window.filterData = filterData;

window.sortData = sortData;

window.computeStats = {
  computeStatsTotal: computeStatsTotal,
  computeStatsAverage: computeStatsAverage,
};