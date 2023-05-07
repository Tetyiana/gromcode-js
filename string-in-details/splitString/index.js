const splitString = (text, len = 10) => {
  if (typeof text !== "string") return null;
  const strArr = [];
  let starPosition = 0;
  while (true) {
    const chunk = text.substr(starPosition, len);
    if (chunk.length <= 0) {
      break;
    }
    strArr.push(chunk.slice().padEnd(len, "."));
    starPosition += len;
  }
  return strArr;
};

console.log(splitString('qwghjvryuilvnvfghjkygtgfnbvkjyfgcddhj', 7));
