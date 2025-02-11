let data = [1, 2, 3, 4, 5];
let data2 = [6, 7, 8, 9, 10];
let arr = [];

for (let i = 0; i < data.length; i++) {
  arr.push(i)
}

for (let j = 0; j < data2.length; j++) {
  arr[data.length+j] = data2[j]
}

console.log(arr)