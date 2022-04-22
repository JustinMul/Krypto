const dateConvert = (data) => {
  let string = "";
  
  for (let i = 0; i < data.length; i++){
    if (data[i] === "T"){
      string += " "
    }
    else if (data[i] === '.'){
      return string + ' GMT'
    }
    else{string += data[i]};

  }

}

export default dateConvert