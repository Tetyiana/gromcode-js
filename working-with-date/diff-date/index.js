export const getDiff = (startDate, endDate) => {
  const getEndDate = endDate.getDate();
  const getStartDate = startDate.getDate();
  const dateInDiff = (getStartDate - getEndDate);

  const days = Math.floor(dateInDiff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((dateInDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((dateInDiff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((dateInDiff % (60 * 1000)) / 1000);

  return (`${days}d, ${hours}h, ${minutes}m, ${seconds}s`);
};

// getDiff(new Date(), new Date());



