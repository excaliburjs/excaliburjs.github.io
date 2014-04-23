'use strict';

var extensions = require('swig-extensions');

module.exports.register = function (swig, opts) {
  opts = opts || {};

  extensions.useFilter(swig, 'markdown');
};
