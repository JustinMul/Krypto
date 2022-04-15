export default function sortByPercentageChange(marketArray) {
  const arr = [];
  const sortedArrayByPercentage = marketArray.sort(function(a, b) {
    return b.price_change_percentage_24h - a.price_change_percentage_24h;
  })
  // for (let i = 0; i < 4; i++) {
  //   arr.push(sortedArrayByPercentage[i])
  // }
  return sortedArrayByPercentage.slice(0, 5);
}


