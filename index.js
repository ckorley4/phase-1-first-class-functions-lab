// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => arr.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function (fare) {
    console.log(fare * multiplier)
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, arg2) {
  return arg2(arrayOfDrivers)
}

fareDoubler(20)
fareTripler(30)
