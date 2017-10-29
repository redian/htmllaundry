import assert from 'assert';
import HL from '../src/index';

describe('#stripMarkup', () => {
  it('strips <html> tags from fragment', () => {
    assert.equal('Foo', HL.stripMarkup('<html>Foo</html>'));
  });

  it('strips <div> tags from fragment', () => {
    assert.equal('FooBar', HL.stripMarkup('<div>Foo</div><div>Bar</div>'));
  });

  it('strips <span> and <p> tags from fragment', () => {
    assert.equal('FooBarBazz', HL.stripMarkup('<div><p>Foo</p><p>Bar</p><span>Bazz</span></div>'));
  });
});


// Converts the characters  ">", "<", "&", '"', and "'" in string
// to their corresponding HTML entities.
describe('#escape', () => {
  it('replaces < with html entity &lt;', () => {
    assert.equal('&lt;', HL.escape('<'));
  });

  it('replaces > with html entity &gt;', () => {
    assert.equal('&gt;', HL.escape('>'));
  });

  it('replaces & with html entity &amp;', () => {
    assert.equal('&amp;', HL.escape('&'));
    assert.equal('Foo &amp; Bar', HL.escape('Foo & Bar'));
  });

  it('replaces " with html entity &quot;', () => {
    assert.equal('&quot;Foo&quot;', HL.escape('"Foo"'));
  });

  it('replaces \' with html entity &apos;', () => {
    assert.equal('&apos;Foo&apos; &apos;Bar&apos;', HL.escape("'Foo' 'Bar'"));
  });

  it('replaces ` with html entity &#x60;;', () => {
    assert.equal('&#x60;Foo&#x60;', HL.escape('`Foo`'));
  });

  it('should not replace existing encoded &xyz; entities', () => {
    assert.equal('Foo &amp; &amp; Bar', HL.escape('Foo & &amp; Bar'));
  });
});


// Converts the HTML entities  '&lt;', '&gt;', '&amp;', '&quot;', 
// '&apos;', and '&#x60;' to corresponding charachters
describe('#unescape', () => {
  it('replaces html entity &lt; with <', () => {
    assert.equal('<', HL.unescape('&lt;'));
  });

  it('replaces html entity &gt; with >', () => {
    assert.equal('>', HL.unescape('&gt;'));
  });

  it('replaces html entity &amp; with &', () => {
    assert.equal('&', HL.unescape('&amp;'));
    assert.equal('Foo & Bar', HL.unescape('Foo &amp; Bar'));
  });

  it('replaces html entity &quot; with "', () => {
    assert.equal('"Foo"', HL.unescape('&quot;Foo&quot;'));
  });

  it("replaces html entity &apos; with '", () => {
    assert.equal("'Foo' 'Bar'", HL.unescape('&apos;Foo&apos; &apos;Bar&apos;'));
  });

  it('replaces html entity &#x60; with `', () => {
    assert.equal('`Foo`', HL.unescape('&#x60;Foo&#x60;'));
  });
});
