let data = [1, 2, 3, 4];
let prefix = [1];
let suffix = [];
let ans = [];
const n = data.length;

for (let i = 1; i < n; i++) {
  prefix[i] = prefix[i-1]*data[i-1]
}

for (let i = n-2; i >= 0; i--) {
  suffix[n-1] = 1
  suffix[i] = suffix[i+1]*data[i+1]
  //console.log(suffix)
}

for (let i = 0; i < n; i++) {
  ans[i] = prefix[i]*suffix[i]
}
console.log(ans)