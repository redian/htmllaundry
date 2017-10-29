const Htmllaundry = {
  tagsRegex: /(<([^>]+)>)/ig,
  charsRegex: /(?!(&\w+;))[&<>"'`]/g, // Negative lookahead to ignore already encoded entities.
  htmlEscapes: {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
    '`': '&#x60;',
  },

  /**
   * Strip all markup from a HTML fragment.
   *
   * @param Mixed markup
   * @return String text
   */
  stripMarkup(markup) {
    if (!markup) {
      return '';
    }

    return markup.replace(this.tagsRegex, '');
  },

  /**
   * Convert HTML reserved characters to their corresponding
   * HTML Entities. https://www.w3schools.com/html/html_entities.asp
   * @param String string
   * @return String string
   */
  escape(string) {
    if (!string) {
      return '';
    }

    return RegExp(this.charsRegex).test(string)
      ? string.replace(this.charsRegex, ch => this.htmlEscapes[ch])
      : string;
  },

  /**
   * Invese operation to the escape method.
   * @param String string
   * @return String string
   */
  unescape(string) {
    const regex = /&(?:lt|gt|amp|quot|apos|#x60);/g;
    const mirrorKeys = Object.entries(this.htmlEscapes).map(([a, b]) => ({ [b]: a }));
    const newHtmlEscapes = Object.assign({}, ...mirrorKeys);

    return RegExp(regex).test(string)
      ? string.replace(regex, ch => newHtmlEscapes[ch])
      : string;
  },
};

export default Htmllaundry;
