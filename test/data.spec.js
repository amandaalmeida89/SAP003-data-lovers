require("../src/data.js");

describe("filterData", () => {

  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("should return \"2443175\" for \"Total_Injured_Persons\" with year 2015 ", () => {
    expect(filterData(2015,"Total_Injured_Persons")).toBe("2443175");
  });
});
