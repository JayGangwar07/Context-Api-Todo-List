let data = [1,9,3,4,9,5,8,3]
let target = 9;
let position = []

for(let i=0;i<data.length;i++){
  if(data[i]===target){
    //x = x+1
    position.push(i)
  }
}
console.log(position)
if (position.length>0){
  console.log(`${target} exists in this array at ${position.join(', ')}`)
}
else{
  console.log(`${target} doesn't exist in this array`)
}