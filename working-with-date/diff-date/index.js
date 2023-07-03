export const getDiff = (startDate, endDate) => {
  const getEndDate = new Date(endDate).getDate();
  const getStartDate = new Date(startDate).getDate();
  const dateInDiff = (getEndDate - getStartDate);

  const days = Math.floor(dateInDiff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((dateInDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((dateInDiff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((dateInDiff % (60 * 1000)) / 1000);

  return (`${days}d, ${hours}h, ${minutes}m, ${seconds}s`);
};

// getDiff();



