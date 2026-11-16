const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { anagramCheck } = require('../index.js');

describe('anagramCheck', () => {
  it('accepts two words made of the same letters', () => {
    assert.equal(anagramCheck('listen', 'silent'), true);
  });

  it('ignores letter case', () => {
    assert.equal(anagramCheck('brake', 'BAKER'), true);
  });

  it('rejects words of different length', () => {
    assert.equal(anagramCheck('abc', 'abcd'), false);
  });

  it('rejects same-length words with different letter counts', () => {
    assert.equal(anagramCheck('aab', 'abb'), false);
  });

  it('treats two empty strings as anagrams', () => {
    assert.equal(anagramCheck('', ''), true);
  });

  it('counts spaces and punctuation as characters', () => {
    assert.equal(anagramCheck('a b', 'ab '), true);
    assert.equal(anagramCheck('ab!', 'abc'), false);
  });
});
