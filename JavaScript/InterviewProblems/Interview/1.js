function find(arr) {
  const frequencyMap = {};

  arr.forEach((element) => {
    if (frequencyMap[element]) {
      frequencyMap[element] = frequencyMap.element + 1;
      console.log(frequencyMap.element + 1);
    }

    frequencyMap[element] = 1;
  });

  return frequencyMap;
}

ans = find(["hello", "world", "hello", "india", "world"]); // Output: {hello:2, world:2, india:1}
console.log(ans);
