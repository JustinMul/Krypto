const dateConvert = (data) => {
  let string = "";
  for (let i = 0; i < data.length; i++){
    if (data[i] === "T"){
      return string;
    }
    string += data[i];
  }
}

export default dateConvert