const htmllaundry = {
  /**
   * Strip all markup from a HTML fragment.
   *
   * @param Mixed markup
   */
  stripMarkup: (markup) => {
    if (!markup) {
      return '';
    }

    const regex = /(<([^>]+)>)/ig;
    return markup.replace(regex, '');
  },
};

module.exports = htmllaundry;
