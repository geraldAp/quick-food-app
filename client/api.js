import sanityClient from "./sanity";

let sanityQuery = (query, params) => sanityClient.fetch(query, params);
// get categories
export const getCategories = () => {
  return sanityQuery(`*[_type=='category']`);
};

export const getMeals = () => {
  return sanityQuery(`
  *[_type=='meal']{
    _id,
      name,
      description,
      image,
    'category': mealCategory->name,
      price,
      hotPick,
  }
  `);
};
export const getMealsById = (id) => {
  return sanityQuery(
    `*[_type=='meal' && _id == $id][0]{
    _id,
    name,
    description,
    image,
  'category': mealCategory->name,
    price,
    hotPick,
    }`,
    { id }
  );
};

export const getMealsByCategory = (category) => {
  return sanityQuery(
    `*[_type=='meal' && mealCategory->name == $category]{
      _id,
      name,
      description,
      image,
    'category': mealCategory->name,
      price,
      hotPick,
  }`,
    { category }
  );
};

export const getTopPicks = () => {
  return sanityQuery(
    `*[_type=='meal' && hotPick == true]{
      _id,
      name,
      description,
      image,
      rating,
      'category': mealCategory->name,
      price,
      hotPick,
    }`
  );
};
