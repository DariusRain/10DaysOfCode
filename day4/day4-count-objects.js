
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let results = [];
    let find = objects.filter(({x, y}, index) => {
        if (x === y) {
            results = results.concat(index);
        }
    });
    return results[results.length - 1] ? results[results.length - 1] : 0;
}