'use strict';

const hljs   = require('../../build');
const should = require('should');

describe('.autoDetection()', () => {
  it('should get an existing language', () => {
    const result = hljs.autoDetection('caboose');

    result.should.be.instanceOf(Object);
  });

  it('should get an existing language by alias', () => {
    const result = hljs.autoDetection('cb');

    result.should.be.instanceOf(Object);
  });

  it('should be case insensitive', () => {
    const result = hljs.autoDetection('cAbOoSe');

    result.should.be.instanceOf(Object);
  });

  it('should return undefined', () => {
    const result = hljs.autoDetection('-impossible-');

    should.strictEqual(result, undefined);
  });

  it('should not break on undefined', () => {
    const result = hljs.autoDetection(undefined);

    should.strictEqual(result, undefined);
  });
});
