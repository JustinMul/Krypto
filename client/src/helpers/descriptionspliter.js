export const descriptionspliter = (description) => {
  const limit = 95;
  let newDescription = "";
  if (description.length > limit) {
    for (let i = 0; i < description.length; i++) {
      if (i === limit - 3) {
        newDescription += "...";
        return newDescription;
      }
      newDescription += description[i];
    }
  }
  return description;
};

export const titlespliter = (title) => {
  const limit = 37;
  let newTitle = "";
  if (title.length > limit) {
    for (let i = 0; i < title.length; i++) {
      if (i === limit) {
        newTitle += "...";
        return newTitle;
      }
      newTitle += title[i];
    }
  }
  return title;
};
