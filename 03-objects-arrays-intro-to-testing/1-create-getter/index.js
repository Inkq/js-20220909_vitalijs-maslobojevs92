/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const values = path.split('.');
  
  return function(obj) {
    let result;

    for (const value of values) {
      if (result) {
        result = result[value];
      } else {
        result = obj[value];
      }
    }

    return result;
  };
}