function mincost(arr)
{ 
//write your code here
	let totalCost = 0;
	while(arr.length > 1) {
		arr.sort((a,b) => a-b);
		const min1 = arr.shift();
		const min2 = arr.shift();

		const combinedLength = min1 + min2;
		totalCost+=combinedLength;
		arr.push(combinedLength);
	}
// return the min cost
	return totalCost;
  
}

module.exports=mincost;
