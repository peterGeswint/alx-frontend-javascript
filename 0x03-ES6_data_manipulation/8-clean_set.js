export default function cleanSet(set, startString) {
  // Filter the set values that start with startString and append the rest of the string
  return [...set]
    .filter((value) => value.startsWith(startString)) // Filter values starting with startString
    .map((value) => value.slice(startString.length)) // Remove the prefix from each matching value
    .join('-'); // Join the results with a hyphen
}
