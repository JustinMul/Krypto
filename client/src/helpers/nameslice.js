const nameslice = (name) => {
  let string = "";
  if (name.length > 14) {
for (let i = 0; i < 10; i++){
  string += name[i]
}
return string += "...";
  }
  return name;
}

export default nameslice