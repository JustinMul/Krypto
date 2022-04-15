const search = (data, input) => {
  data.filter((item)=>item.includes(input));
};

export default search;