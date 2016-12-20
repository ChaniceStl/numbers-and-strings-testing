const add = (a, b) => a + b;
const even = arr => {
	return arr.filter(element => element % 2 == 0)
}
const secondSmallest = (arr) => {
	var smallest = Number.POSITIVE_INFINITY
	var secSmall = arr[0]
	for(var i = 0; i < arr.length; i++) {
		if(smallest > arr[i]) {
			secSmall = smallest
			smallest = arr[i]
		}
	}
	return secSmall
}

const uniqueNum = arr =>{
	var hash = {}
	var newArr = []
	for(var i = 0; i< arr.length; i++){
		if(hash[arr[i]]){
			hash[arr[i]] +=1
		}
			else {
				hash[arr[i]] = 1
			}
	}
  for(var key in hash){
   console.log(hash[key])
   if(hash[key] === 1){
     newArr.push(parseInt(key))
   }
  }
  return newArr;
}

module.exports = {
  add: add,
  even: even,
  secondSmallest: secondSmallest,
  uniqueNum:uniqueNum
};
