const nums = [4, 5, 6, 7, 0, 1, 2]
const tar = 2
let n = nums.length

let st = 0
let end = n-1

while (st <= end){
let mid = st+(end-st)/2

if (nums[mid] === tar) {
console.log(mid)
break
}

//left sorted
if (nums[st] < nums[mid]){
if (nums[st] <= tar && tar <= nums[mid]) end = mid-1

else st = mid+1
}

//right sorted

if (nums[mid] < nums[end]){
if (nums[mid] <= tar && tar <= nums[mid]) st = mid+1
else end = mid-1

}
console.log(mid)
}