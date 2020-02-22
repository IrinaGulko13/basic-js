const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    sampleActivityNumber = parseFloat(sampleActivity)
    if (typeof sampleActivity !== "string" || sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY || isNaN(sampleActivityNumber) ) {
    return false;
    } else {
      return  Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) * HALF_LIFE_PERIOD /0.693);
    }
};

