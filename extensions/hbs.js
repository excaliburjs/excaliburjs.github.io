var _ = require('lodash');
var path = require('path');

module.exports.register = function (Handlebars, opts) {
  opts = opts || {};
    
  var helpers = {

    ifin: function (source, find, options) {
      if (source.indexOf(find) > -1) {
        return options.fn(this);
      }
    },

    nbsp: function (times, length) {
      var result = [];
      for(var i=0;i<(times * length);i++){
        result.push("&nbsp;");
      }
      return result.join("");
    },
    
    filename: function (filePath, options) {
      return path.basename(filePath).split(".")[0];
    }
  };
  
  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
