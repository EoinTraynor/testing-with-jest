const reverseString = str => str.toLowerCase().split('').reverse().join('');
const chunkArray = (arr, len) => {
    const chunkedArr = [];
    // Set index
    let i = 0;

    // Loop while index is less than the array length
    while (i < arr.length) {
        // Slice out from the index to the index + the chunk length nd push on to the chunked array
        chunkedArr.push(arr.slice(i, i + len));
        // Increment by chunk length
        i += len;
    }

    return chunkedArr;
}

const isAnagram = (str1, str2) => {
    return formatStr(str1) === formatStr(str2);
  }
  
  // Helper function
  function formatStr(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }

module.exports = {
    reverseString,
    chunkArray,
    isAnagram,
};