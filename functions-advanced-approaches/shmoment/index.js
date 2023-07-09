export const shmoment = (date) => {
  const resultDate = new Date(date);

  const add = (value, num) => {
    switch (value) {
      case 'years':
        resultDate.setFullYear(resultDate.getFullYear() + num);
        break;
      case 'months':
        resultDate.setMonth(resultDate.getMonth() + num);
        break;
      case 'days':
        resultDate.setDate(resultDate.getDate() + num);
        break;
      case 'hours':
        resultDate.setHours(resultDate.getHours() + num);
        break;
      case 'minutes':
        resultDate.setMinutes(resultDate.getMinutes() + num);
        break;
      case 'seconds':
        resultDate.setSeconds(resultDate.getSeconds() + num);
        break;
      case 'milliseconds':
        resultDate.setMilliseconds(resultDate.getMilliseconds() + num);
        break;
      default:
        break;
    }
    return shmoment(resultDate);
  };

  const subtract = (value, num) => {
    return add(value, -num);
  };

  const result = () => {
    return resultDate;
  };

  return {
    add,
    subtract,
    result,
  };
};

