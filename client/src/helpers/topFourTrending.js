export default function topFourTrending(input) {
  let trending = [...input];
  console.log("this is trending", typeof trending);

  const sorted = trending
    .sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    )
    .slice(0, 4);
  return sorted;
}
