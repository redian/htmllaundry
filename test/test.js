import assert from 'assert';
import {
  stripMarkup,
} from '../src/index';

describe('#strip_markup', () => {
  it('strips <html> tags from fragment', () => {
    assert.equal('Foo', stripMarkup('<html>Foo</html>'));
  });

  it('strips <div> tags from fragment', () => {
    assert.equal('FooBar', stripMarkup('<div>Foo</div><div>Bar</div>'));
  });

  it('strips <span> and <p> tags from fragment', () => {
    assert.equal('FooBarBazz', stripMarkup('<div><p>Foo</p><p>Bar</p><span>Bazz</span></div>'));
  });
});
