export const descriptionspliter = (description) => {
  const len = "People can have a better knowledge of the Metaverse and Web3 by learning how to utilize Minecraft."
  const num = 95;
  let newDescription = "";
  console.log("num count is ", num)
  if (description.length > num) {
    for (let i = 0; i < description.length; i++){
      if (i === num - 3) {
        newDescription += "..."
        return newDescription;
      }
      newDescription += description[i];
    }

  }
  return description;
}

export const titlespliter = (title) => {
  const len = "The Metaverse needs to keep an eye on privacy to avoid Meta’s mistakes"
  const num = 60;
  let newDescription = "";
  console.log("num count is ", num)
  if (title.length > num) {
    for (let i = 0; i < title.length; i++){
      if (i === num - 3) {
        newDescription += "..."
        return newDescription;
      }
      newDescription += title[i];
    }

  }
  return title;
}