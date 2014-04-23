'use strict';

var extensions = require('swig-extensions');

module.exports.register = function (swig, opts) {
  opts = opts || {};

  extensions.useTag(swig, 'markdown');
};
