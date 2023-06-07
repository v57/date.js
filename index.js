'use strict'

// converting any to Date
/**
 * @param {string | number | Date | undefined} date
 * @returns {Date | undefined}
 */
module.exports.toDate = function(date) {
  if (date == undefined) {
    return undefined
    // @ts-ignore
  } else if (isNaN(date)) {
    return new Date(date)
  } else if (date instanceof Date) {
    return date
  } else {
    // @ts-ignore
    if (date > 10000000000) throw 'please use seconds format'
    // @ts-ignore
    else return new Date(date*1000)
  }
}