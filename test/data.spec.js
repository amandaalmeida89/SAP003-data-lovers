import { INJURIES } from "../src/data/injuries/injuries";
import { filterData } from "../src/data.js";

describe("filterData", () => {

  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("should return \"airplane: 359, auto: 3064401, bicycle: 51160, boat: 4355, motorcycle: 57723, year: 2000\" with year 2000", () => {
    expect(filterData(INJURIES, 2000, 2000)).toMatchObject([{
      airplane: 359,
      auto: 3064401,
      bicycle: 51160,
      boat: 4355,
      motorcycle: 57723,
      year: 2000
    }]);
  });

  it("should return all years", () => {
    const result = filterData(INJURIES);
    expect(result.length).toBe(INJURIES.length);
  });
});

describe("sortData", () => {

  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  describe("when sort by asc", () => {
    it("should order the array", () => {
      const mockeData = [
        {
          year: 2018
        },
        {
          year: 2014
        },
        {
          year: 2004
        },
        {
          year: 2016
        },
      ];
      expect(sortData(mockeData, "year", "asc")).toMatchObject(
        [
          {
            year: 2004
          },
          {
            year: 2014
          },
          {
            year: 2016
          },
          {
            year: 2018
          },
        ]
      );
    });
  });

  describe("when sort by desc", () => {
    it("should order the array", () => {
      const mockeData = [
        {
          year: 2018
        },
        {
          year: 2014
        },
        {
          year: 2004
        },
        {
          year: 2016
        },
      ];
      expect(sortData(mockeData, "year", "desc")).toMatchObject(
        [{
          year: 2018
        },
        {
          year: 2016
        },
        {
          year: 2014
        },
        {
          year: 2004
        },
        ]
      );
    });
  });

  describe("when missing params", () => {
    it("should do nothing", () => {
      const mockeData = [
        {
          year: 2018
        },
        {
          year: 2014
        },
        {
          year: 2004
        },
        {
          year: 2016
        },
      ];
      expect(sortData(mockeData)).toMatchObject(mockeData);
    });
  });

});

describe("computeStats.computeStatsTotal", () => {

  it("is a function", () => {
    expect(typeof computeStats.computeStatsTotal).toBe("function");
  });

  it("testing computeStatsTotal function", () => {
    const cont = [{
      airplane: 1,
      auto: 2,
      bicycle: 3,
      boat: 4,
      motorcycle: 5,
    }, {
      airplane: 1,
      auto: 2,
      bicycle: 3,
      boat: 4,
      motorcycle: 5,
    }];
    expect(computeStats.computeStatsTotal(cont)).toMatchObject(
      {
        airplane: 2,
        auto: 4,
        bicycle: 6,
        boat: 8,
        motorcycle: 10,
      }
    );
  });
});

describe("computeStats.computeStatsAverage", () => {

  it("is a function", () => {
    expect(typeof computeStats.computeStatsAverage).toBe("function");
  });

  it("testing computeStatsAverage function", () => {
    const cont = [{
      airplane: 1,
      auto: 2,
      bicycle: 3,
      boat: 4,
      motorcycle: 5,
    }, {
      airplane: 1,
      auto: 2,
      bicycle: 3,
      boat: 4,
      motorcycle: 5,
    }];
    expect(computeStats.computeStatsAverage(cont)).toMatchObject(
      {
        airplane: 1,
        auto: 2,
        bicycle: 3,
        boat: 4,
        motorcycle: 5,
      }
    );
  });
});