'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Htmllaundry = {
  tagsRegex: /(<([^>]+)>)/ig,
  charsRegex: /(?!(&\w+;))[&<>"'`]/g, // Negative lookahead to ignore already encoded entities.
  htmlEscapes: {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
    '`': '&#x60;'
  },

  /**
   * Strip all markup from a HTML fragment.
   *
   * @param Mixed markup
   * @return String text
   */
  stripMarkup: function stripMarkup(markup) {
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
  escape: function escape(string) {
    var _this = this;

    if (!string) {
      return '';
    }

    return RegExp(this.charsRegex).test(string) ? string.replace(this.charsRegex, function (ch) {
      return _this.htmlEscapes[ch];
    }) : string;
  },


  /**
   * Invese operation to the escape method.
   * @param String string
   * @return String string
   */
  unescape: function unescape(string) {
    var regex = /&(?:lt|gt|amp|quot|apos|#x60);/g;
    var mirrorKeys = Object.entries(this.htmlEscapes).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          b = _ref2[1];

      return _defineProperty({}, b, a);
    });
    var newHtmlEscapes = Object.assign.apply(Object, [{}].concat(_toConsumableArray(mirrorKeys)));

    return RegExp(regex).test(string) ? string.replace(regex, function (ch) {
      return newHtmlEscapes[ch];
    }) : string;
  }
};

exports.default = Htmllaundry;