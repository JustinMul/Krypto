export default function searchFilter(input, value) {
  return input.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
}
