export const getDiff = (startDate, endDate) => {
  // const getEndDate = endDate.getDate();
  // const getStartDate = startDate.getDate();
  const secondsDiff = Math.abs(startDate - endDate) / 1000;
  const daysRetail = Math.floor(secondsDiff / 86400);
  const hoursRetail = Math.floor(secondsDiff / 3600) % 24;
  const minutesRetail = Math.floor(secondsDiff / 60) % 60;
  const secondsRetail = Math.floor(secondsDiff) % 60;

  return `${daysRetail}d ${hoursRetail}h ${minutesRetail}m ${secondsRetail}s`;
};





