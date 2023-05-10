module.exports = function (str) {
  const transformedStr = str
    .replace(/[^0-9A-Z]+/gi, '')
    .toLowerCase();
  let reversedStr = transformedStr.split('').reverse().join('');
  return transformedStr === reversedStr ? true : false;
};
