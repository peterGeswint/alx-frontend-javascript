export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  if (startString === '') {
    return [...set].join('-');
  }

  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
