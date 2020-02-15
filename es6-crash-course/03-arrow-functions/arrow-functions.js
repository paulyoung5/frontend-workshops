/*---------------------------------------------------------------------/
 * Arrow functions
 * AKA: "fat arrows", "anonymous functions"
 * 
 * Pros:
 * - Compact syntax means *some* operations can be
 *   expressed more readably
 * - Preserves 'this' - no need for a `self` variable,
 *   or `.bind(this)`
 * 
 * Cons:
 * - Shorter code isn't always more readable
 * - Reading the call stack when debugging isn't so informative
 *
/-----------------------------------------------------------------------*/

/**
 * Example: standard function syntax vs arrow function
 *
 * We want to take a number, double it, then return it
 */
function double(n) {
  return n * 2
}

/**
 * Below, we list our parameters on the LHS of the arrow,
 * and returning the RHS
 */
const double2 = n => n * 2

/**
 * Both can be called in the same way,
 * passing a number
 */
const doubled = double(7)
const doubled2 = double2(7)

// Both return the same result:
console.log(doubled) // 7
console.log(doubled2) // 7
