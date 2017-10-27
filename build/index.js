'use strict';

var htmllaundry = {
  /**
   * Strip all markup from a HTML fragment.
   *
   * @param Mixed markup
   */
  stripMarkup: function stripMarkup(markup) {
    if (!markup) {
      return '';
    }

    var regex = /(<([^>]+)>)/ig;
    return markup.replace(regex, '');
  }
};

module.exports = htmllaundry;