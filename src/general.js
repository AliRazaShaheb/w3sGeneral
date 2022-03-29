const imgArr = [1, 2, 3, 4, 4, 4, 5, 6, 9, 9, 9, 9, 9, 9];

const maximumElementInArray = imgArr.reduce((acc, cur, i, arr) => {
  let maxn = arr.filter((m) => m === acc).length;
  let minn = arr.filter((mn) => mn === cur).length;
  console.log(`${acc} -- ${cur}`);
  // console.log(`${maxn} *** ${minn}`);
  return maxn >= minn ? acc : cur;
}, -Infinity);

console.log(maximumElementInArray);
