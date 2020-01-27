'use strict';

const hljs   = require('../../build');
const should = require('should');

describe('.getLanguage()', () => {
  it('should get an existing language', () => {
    const result = hljs.getLanguage('caboose');

    result.should.be.instanceOf(Object);
  });

  it('should get an existing language by alias', () => {
    const result = hljs.getLanguage('cb');

    result.should.be.instanceOf(Object);
  });

  it('should be case insensitive', () => {
    const result = hljs.getLanguage('cAbOoSe');

    result.should.be.instanceOf(Object);
  });

  it('should return undefined', () => {
    const result = hljs.getLanguage('-impossible-');

    should.strictEqual(result, undefined);
  });

  it('should not break on undefined', () => {
    const result = hljs.getLanguage(undefined);

    should.strictEqual(result, undefined);
  });
});
