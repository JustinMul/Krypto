export default function searchFilter(input, value) {
  // input will be state.market
  return input.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
};