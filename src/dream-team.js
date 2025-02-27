const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = "";
  try {
    for (const elem of members)
      if (typeof elem == 'string') teamName += elem.trim()[0].toUpperCase();
  } catch (TypeError) {
    return false;
  }
  return teamName.split("").sort().join("");
}

module.exports = {
  createDreamTeam
};
