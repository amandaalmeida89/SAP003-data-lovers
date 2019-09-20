import {INJURIES} from "../src/data/injuries/injuries";
import {filterData} from "../src/data.js";

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
      year: 2000}]);
  });

  it("should return all years", () => {
    const result = filterData(INJURIES);
    expect(result.length).toBe(INJURIES.length);
  });
});

