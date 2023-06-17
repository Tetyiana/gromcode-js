'use strict';

/**
 * @return {object}
 */
export function createLogger() {
  // put your code here

  let message = "";
  let dateTime = "";
  let type = "";
  let arr = [];

  const warn = (textWarn) => {
    message = textWarn;
    dateTime = new Date();
    type = "warn";
    arr.push({message, dateTime, type});
    };
 
  const error = (textError) => {
    message = textError;
    dateTime = new Date();
    type = "error";
    arr.push({message, dateTime, type});
  };
  const log = (textLog) => {
    message = textLog;
    dateTime = new Date();
    type = "log";
    arr.push({message, dateTime, type});
  };

  const getRecords = (filterType) => {
    if (!filterType) {
      return arr.sort((a, b) => b.dateTime - a.dateTime);
    }
    return arr.filter((e) => e.type === filterType).sort((a, b) => b.dateTime - a.dateTime);
  };
return {
    warn,
    error,
    log,
    getRecords,
  };
}





// 'use strict';

// /**
//  * @return {object}
//  */
// export function createLogger() {
//   // put your code here

//   let message = "";
//   let dateTime = "";
//   let type = "";
//   let arr = [];
//   const max = Math.max(dateTime.parse);
//   const min = Math.min(dateTime.parse);
//   const warn = (textWarn) => {
//     message = textWarn;
//     dateTime = new Date();
//     type = "warn";
//     return (arr.push({message, dateTime, type}));
//     };
 
//   const error = (textError) => {
//     message = textError;
//     dateTime = new Date();
//     type = "error";
//     return (arr.push({message, dateTime, type}));
//   };
//   const log = (textLog) => {
//     message = textLog;
//     dateTime = new Date();
//     type = "log";
//     return (arr.push({message, dateTime, type}));
//   };

//   const getRecords = (text) => {
//     return arr.filter(({type: e}) => e == text).sort((min, max)=> max-min);
//   };
// return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// }

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []







let message = "";
let dataTime = "";
let type = "";
let arr = [];
// const max = Math.max(dataTime);
// const min = Math.min(dataTime);
const warn = (textWarn) => {
  message = textWarn;
  dataTime = new Date();
  type = "warn";
  console.log(arr.push({message, dataTime, type}));
  };
  warn ("tfjhghmgmhgf")