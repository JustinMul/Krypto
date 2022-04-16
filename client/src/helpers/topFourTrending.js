export default function topFourTrending(input) { 
  // input is res.data
  const sorted = input.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0,4);
  return sorted;
}


