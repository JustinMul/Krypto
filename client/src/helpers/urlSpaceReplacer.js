export default function urlSpaceReplacer(id) {
  let newURL = "";
  for (let i = 0; i < id.length; i++) {
    id[i] === " " ? (newURL += "-") : (newURL += id[i]);
  }
  return newURL.toLowerCase();
}
