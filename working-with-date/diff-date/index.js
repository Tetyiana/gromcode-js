export const getDiff = (startDate, endDate) => {

  const diff = Math.abs(endDate.getTime() - startDate.getTime());

  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);

  return (`${days}d, ${hours}h, ${minutes}m, ${seconds}s`);

}


