const { reverseString, chunkArray, isAnagram } = require('./helperFunctions');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});

test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('chunk array of 10 val with length 2', () => {
    const nums = [1,2,3,4,5,6,7,8,9,10];
    const len = 2;
    const chunkedArr = chunkArray(nums, len);
    expect(chunkedArr).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);
});

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
    const isAnagramTest = isAnagram('cinema', 'iceman');
    expect(isAnagramTest).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room££"', () => {
    const isAnagramTest = isAnagram('Dormitory', 'dirty room££');
    expect(isAnagramTest).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    const isAnagramTest = isAnagram('Hello', 'Aloha');
    expect(isAnagramTest).toBeFalsy();
});