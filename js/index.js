const categories = require("./constants/categories.const");

/**
 * Returns a path based on the category name and the structure of the categories array
 * @param {Array} categories
 * @param {string} categoryName
 * @returns {(string|null)} String if the path is found, null if not found
 */
const getCategoryPath = (categories, categoryName) => {
  if (!categories || !categories.length) return null;

  for (category of categories) {
    const { name, subcategories } = category;

    if (name === categoryName) return `/${name}`;

    const subPath = getCategoryPath(subcategories, categoryName);
    if (subPath) return `/${name}${subPath}`;
  }
  return null;
};

module.exports = getCategoryPath;

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, "category4")); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, "category2")); // should output: '/category1/category2'
console.log(getCategoryPath(categories, "category5")); // should output: '/category5'
