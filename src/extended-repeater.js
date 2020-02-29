module.exports = function repeater(str, options) {
    let result = '';

    let defaultValue = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|',
    }

    if (!options.separator) {
        options.separator = defaultValue.separator;
    }
    if (!options.repeatTimes) {
        options.repeatTimes = defaultValue.repeatTimes;
    }
    if (!options.additionSeparator) {
        options.additionSeparator = defaultValue.additionSeparator;
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = defaultValue.additionRepeatTimes;
    }
    if (options.addition === undefined) {
        options.additionRepeatTimes = defaultValue.addition;
    }

    for (let i=0; i<options.repeatTimes; i++) {
        result += str;
        for (let j=0; j<options.additionRepeatTimes; j++) {
            result += options.addition;
            if (j < options.additionRepeatTimes - 1) {
                result += options.additionSeparator;
            }
    }
    if ( i< options.repeatTimes - 1){
        result += options.separator;
    }
}
return result;
};
  