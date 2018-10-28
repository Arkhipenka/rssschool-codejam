const sumOfOther = (input) => {
  return input.map((itemA, indexA, list) => {
    return list.filter((itemB, indexB) => indexA !== indexB).reduce((a, b) => a + b);
  });
}