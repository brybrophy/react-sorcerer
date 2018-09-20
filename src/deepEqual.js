export default function deepEqual(a, b) {
  const aIsObject = typeof a === 'object' && a != null;
  const bIsObject = typeof b === 'object' && b != null;

  if (aIsObject && bIsObject) {
    let count = [0, 0];

    for (let key in a) count[0]++;
    for (let key in b) count[1]++;

    if (count[0] - count[1] != 0) {
      return false;
    }

    for (let key in a) {
      if (!(key in b) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }

    for (let key in b) {
      if (!(key in a) || !deepEqual(b[key], a[key])) {
        return false;
      }
    }

    return true;
  } else {
    return a === b;
  }
}
