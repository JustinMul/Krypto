export const dateConvert = (data) => {
  let string = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "T") {
      string += " ";
    } else if (data[i] === ".") {
      return string + " GMT";
    } else {
      string += data[i];
    }
  }
};

export const newsDateConvert = (data) => {
  let string = "";
  let counter = false;

  for (let i = 0; i < data.length; i++) {
    if (counter && data[i] === ":") {
      return string;
    }
    if (data[i] === ":") {
      string += data[i];
      counter = true;
    } else {
      string += data[i];
    }
  }
};
