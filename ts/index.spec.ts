import { getCategoryPath } from ".";
import { categories } from "./constants/categories.const";

describe("Given getCategoryPath method", () => {
  describe(`When the categories param is ${JSON.stringify(categories)}`, () => {
    const categoryNameCases = [
      { categoryName: "category1", expectedPath: "/category1" },
      { categoryName: "category2", expectedPath: "/category1/category2" },
      { categoryName: "category3", expectedPath: "/category1/category3" },
      {
        categoryName: "category4",
        expectedPath: "/category1/category3/category4",
      },
      { categoryName: "category5", expectedPath: "/category5" },
      { categoryName: "category9", expectedPath: null },
      { categoryName: "random-word", expectedPath: null },
      { categoryName: "", expectedPath: null },
    ];

    describe.each(categoryNameCases)(
      "And category name is '$categoryName'",
      ({ categoryName, expectedPath }) => {
        it(`Then it should return '${expectedPath}'`, () => {
          const returnedPath = getCategoryPath(categories, categoryName);
          expect(returnedPath).toBe(expectedPath);
        });
      }
    );
  });

  describe("When the categories param is an empty array", () => {
    it("Then it should return null", () => {
      const returnedPath = getCategoryPath([], "category1");
      expect(returnedPath).toBe(null);
    });
  });
});
