const splitText = (text, len = 10) => {
  if (typeof text !== "string") return null;
  const strArr = [];
  let starPosition = 0;
  while (true) {
    let chunk = text.substr(starPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    starPosition += len;
  }
  return strArr.join("\n");
};

splitText('qwghjvryuilvnvfghjkygtgfnbvkjyfgcddhj', 5);
