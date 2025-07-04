const getCategoryPath = require("./index");
const categories = require("./constants/categories.const");

const invalidValues = [
  { value: null, expectedPath: null },
  { value: undefined, expectedPath: null },
  { value: false, expectedPath: null },
  { value: "", expectedPath: null },
  { value: NaN, expectedPath: null },
  { value: [], expectedPath: null },
  { value: 0n, expectedPath: null },
  { value: -0, expectedPath: null },
  { value: true, expectedPath: null },
  { value: {}, expectedPath: null },
  { value: 1, expectedPath: null },
  { value: "0", expectedPath: null },
  { value: "false", expectedPath: null },
  { value: new Date(), expectedPath: null },
  { value: -1, expectedPath: null },
  { value: 3.14, expectedPath: null },
  { value: -3.14, expectedPath: null },
];

describe("Given getCategoryPath method", () => {
  describe(`When the categories param is ${JSON.stringify(categories)}`, () => {
    const categoryNameCases = [
      { value: "category1", expectedPath: "/category1" },
      { value: "category2", expectedPath: "/category1/category2" },
      { value: "category3", expectedPath: "/category1/category3" },
      { value: "category4", expectedPath: "/category1/category3/category4" },
      { value: "category5", expectedPath: "/category5" },
      { value: "category9", expectedPath: null },
      { value: "random-word", expectedPath: null },
      ...invalidValues,
    ];

    describe.each(categoryNameCases)(
      "And category name is '$value'",
      ({ value, expectedPath }) => {
        it(`Then it should return ${expectedPath}`, () => {
          const returnedPath = getCategoryPath(categories, value);
          expect(returnedPath).toBe(expectedPath);
        });
      }
    );
  });

  describe("When categoryName is 'category1'", () => {
    describe.each(invalidValues)("And categories is '$value'", ({ value }) => {
      it(`Then it should return null`, () => {
        const returnedPath = getCategoryPath(value, "category1");
        expect(returnedPath).toBe(null);
      });
    });
  });
});
