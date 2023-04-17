const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!isNaN(date.getTime())) {
    let month = date.getMonth();
    if ((month >= 0 && month <= 1) || (month == 11)) { return 'winter' }
    if ((month >= 2 && month <= 4)) { return 'spring' }
    if ((month >= 5 && month <= 7)) { return 'summer' }
    if ((month >= 8 && month <= 10)) { return 'autumn' }
  } else {
    throw new UserException("Invalid date!");
  }
}
const [
  winter,
  spring,
  summer,
  autumn,
] = [
      new Date(2019, 11, 22, 23, 45, 11, 500),
      new Date(2018, 4, 17, 11, 27, 4, 321),
      new Date(2017, 6, 11, 23, 45, 11, 500),
      new Date(1994, 8, 26, 3, 0, 11, 500),
  ];
function UserException(message) {
  this.message = message;
}
console.log(getSeason(spring));
console.log(getSeason(summer));
console.log(getSeason(autumn));
module.exports = {
  getSeason
};
