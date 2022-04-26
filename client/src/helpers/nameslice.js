const nameslice = (name) => {
  let string = "";
  if (name.length > 18) {
    for (let i = 0; i < 18; i++) {
      string += name[i];
    }
    return (string += "...");
  }
  return name;
};

export default nameslice;
