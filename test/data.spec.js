require("../src/data.js");

describe("filterData", () => {

  it("is a object", () => {
    expect(typeof filterData).toBe("object");
  });

  it("should return \"airplane: 352, auto: 2986783, bicycle: 51160, boat: 4355, motorcycle: 57723, year: 2000\" with year 2000 ", () => {
    expect(window.filterData.accidentGrouping(2000)).toBe([{
      airplane: 352,
      auto: 2986783,
      bicycle: 51160,
      boat: 4355,
      motorcycle: 57723,
      year: 2000}]);
  });
});

