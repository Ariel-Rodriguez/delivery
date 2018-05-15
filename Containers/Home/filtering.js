/**
 * Helpers to filter restaurant list
 */
import { groupBy, uniq, get, flatten, unionBy } from 'lodash'


// returns an array which contains unique categories for given restaurant
function extractCategoryTagsFromRestaurant(restaurant) {
  // Every restaurant owns an array of categories and a category is an string delimited by comma
  return restaurant.general.categories.map(slug => uniq(slug.split(',')))
}

// returns all category filters found in the list
function sumarizeCategoryTags(state, newCategories) {
  const categoryGroups = groupBy(newCategories)
  const sum = newCategories.map(category => {
    const count = get(categoryGroups, `${category}.length`, 0)
    const prevCount = get(state.filters.find(f => f === category), 'count', 0)
    return { value: category, count: prevCount + count, label: `${category} (${count})` }
  })
  return unionBy(sum, state.filters, 'value')
}

// Build filters found in the current restaurant list
function createFiltersFromRestaurantList(state, list) {
  const newCategoryFilters = flatten(list.reduce((total, restaurant) => [
    ...total,
    ...extractCategoryTagsFromRestaurant(restaurant),
  ], []))
  return sumarizeCategoryTags(state, newCategoryFilters)
}

// todo memoize this
const comparatorComposedSlugInString = (list, slugString) =>
  slugString.split(',').some(slug => list.some(fiterList => fiterList.value === slug))


/**
 * You want to use this when try to filter by items from an array against the following composed structure
 * List [  object { ... List [  String, String, ...  ]  }, ... ]
 * it is an Array which contains the list to filter but this list is inside of an object into deep path,.
 * You want to select the items from root list by filtering by criteria of that inner list against few possible candidates of other external list.
 * @param {String} path the path to find deeper per iteration
 * @param {Array} slugList an array of string to act as blacklist
 */
function makeDeepFilterBySlugList(path, slugList, comparator = comparatorComposedSlugInString) {
  return list => {
    if (!slugList.length) return list
    const getComparatorResult = slugString => comparator(slugList, slugString)
    const filterByInnerSlugs = rootItem => get(rootItem, path, []).some(getComparatorResult)
    return list.filter(filterByInnerSlugs)
  }
}

export {
  createFiltersFromRestaurantList,
  makeDeepFilterBySlugList,
}
