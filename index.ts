interface Category {
  name: string;
  subcategories: Category[];
}

const categories: Category[] = [
  {
    name: "category1",
    subcategories: [
      {
        name: "category2",
        subcategories: [],
      },
      {
        name: "category3",
        subcategories: [
          {
            name: "category4",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "category5",
    subcategories: [],
  },
];

/**
 * Returns a path based on the category name and the structure of the categories array
 * @param {Category[]} categories
 * @param {string} categoryName
 * @returns {(string|null)} String if the path is found, null if not found
 */
const getCategoryPath = (
  categories: Category[],
  categoryName: string
): string | null => {
  for (const category of categories) {
    const { name, subcategories } = category;

    if (name === categoryName) return `/${name}`;

    const subPath = getCategoryPath(subcategories, categoryName);
    if (subPath) return `/${name}${subPath}`;
  }
  return null;
};

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, "category4")); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, "category2")); // should output: '/category1/category2'
console.log(getCategoryPath(categories, "category5")); // should output: '/category5'
