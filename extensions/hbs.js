var _ = require('lodash');
var path = require('path');

module.exports.register = function (Handlebars, opts) {
  opts = opts || {};
  
  //console.log("helpers", opts);
  
  var helpers = {

    nbsp: function (times, length) {
      var result = [];
      for(var i=0;i<(times * length);i++){
        result.push("&nbsp;");
      }
      return result.join("");
    },
    
    filename: function (filePath, options) {
      return path.basename(filePath).split(".")[0];
    },

    /**
     * Usage: {{typeLink type}}
     */
    typeLink: function (type) {      
      
      var searchType = type;
      
      // Array?
      if (searchType && searchType.indexOf('[]')) {
        searchType = searchType.replace("[]", "");
      }
      
      if (opts.data.api && opts.data.api.classes[searchType]) {
        var link = '<a href="' + searchType + opts.ext + '">' + type + '</a>';
        return new Handlebars.SafeString(link);
      }

      return '<code>' + type + '</code>';
    },

    /**
     * Renders the documentation sidebar based on a YAML file (docs.yml) and
     * available documentation pages Assemble finds.
     * @todo this is terrible and i'm a terrible human being
     */
    docs_sidebar: function (data, pages) {
      if (!pages || !data) { return "ERROR"; }

      // console.log(pages);

      // YAML:
      // data:
      // - Category Name:
      //   - quickstart
      //   - sub-item:
      //     - foo
      //
      // JSON:
      // data: [
      //   "category-name": [
      //     "quickstart",
      //     "sub-item": [
      //        "sub-sub-item"
      //     ]
      //   ]
      // ]
      var extractFirstKey = function (obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) { return key; }
        }
        return undefined;
      };
      var extractFirstValue = function (obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) { return obj[key]; }
        }
        return undefined;
      };
      var findPage = function (basename) {
        var matches = _.filter(pages, function (page) {
          // TODO: handle sub folders
          return basename === page.basename;
        });

        if (matches.length > 0) {
          return matches[0];
        } else {
          return undefined;
        }
      };

      //
      // Create tree structure
      // by nesting pages according
      // to YAML data
      //
      var recursePages = function (arr, menuItems) {
        _.each(arr, function (menuItem) {
          var page;

          if (_.isObject(menuItem)) {
            page = findPage(extractFirstKey(menuItem));

            if (!page) { return; }

            page = _.clone(page);
            page.items = [];
            recursePages(extractFirstValue(menuItem), page.items);
          } else {
            page = findPage(menuItem);

            if (!page) { return; }
          }

          menuItems.push(_.clone(page));
        });
      };
      var categories = [];

      _.each(data, function (item) {

        var category = {};

        category.title = extractFirstKey(item);
        category.items = [];

        // iterate children and build menu structure
        recursePages(extractFirstValue(item), category.items);

        categories.push(category);
      });

      var anyChildrenCurrent = function (items) {
        return _.some(items, function (page) {
          if (page.isCurrentPage) {
            return true;
          } else if (page.items) {
              return anyChildrenCurrent(page.items);
          }

          return false;
        });
      };
      var createMenuItemLink = function (page, closeTag) {
        var link = "";
        var classes = [];

        if (page.isCurrentPage) {
          classes.push("current active");
        }

        // are any of my children current?
        if (page.items && anyChildrenCurrent(page.items)) {
          classes.push("active");
        }

        link += "<li class='" + classes.join(" ") + "'>";
        link += "<a href='" + page.relativeLink + "'>" + page.data.title + "</a>";

        if (closeTag) {
          link += "</li>";
        }

        return link;
      };
      var createMenu = function (page) {

        // sub-items?
        if (page.items) {

          var menu = createMenuItemLink(page, false);

          menu += "<ul class='nav sub-nav'>";

          _.each(page.items, function (mi) {
            menu += createMenu(mi);
          });

          menu += "</ul></li>";

          return menu;
        } else {
          // single-link
          return createMenuItemLink(page, true);
        }
      };

      //
      // build menu recursively
      //

      var menu = "";

      _.each(categories, function (category) {

        // top-level are always categories
        menu += "<div class='panel panel-primary'>";
          menu += "<div class='panel-heading'><h3 class='panel-title'>" + category.title + "</h3></div>";
          menu += "<div class='panel-body'>";
          // does this item have sub-items?
          if (category.items.length > 0) {
            menu += "<ul class='nav sub-nav'>";

              // iterate sub-menu items and recursively construct any level of
              // sub-navigation
              _.each(category.items, function (page) {
                menu += createMenu(page);
              });

            menu += "</ul>";
          }
          menu += "</div>";
        menu += "</div>";

      });

      return menu;
    },
    
    /**
     * Renders the documentation sidebar based on a YAML file (docs.yml) and
     * available documentation pages Assemble finds.
     * @todo this is terrible and i'm a terrible human being
     */
    api_sidebar: function (data, api, apiPage) {
      if (!api || !data) { return "ERROR"; }
      
      // console.log(pages);

      // YAML:
      // data:
      // - Category Name:
      //   - quickstart
      //   - sub-item:
      //     - foo
      //
      // JSON:
      // data: [
      //   "category-name": [
      //     "quickstart",
      //     "sub-item": [
      //        "sub-sub-item"
      //     ]
      //   ]
      // ]
      var extractFirstKey = function (obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) { return key; }
        }
        return undefined;
      };
      var extractFirstValue = function (obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) { return obj[key]; }
        }
        return undefined;
      };
      var findClass = function (name) {
        var matches = _.filter(_.toArray(api.classes), function (cls) {
          return name === cls.name;
        });

        if (matches.length > 0) {
          return matches[0];
        } else {
          return undefined;
        }
      };

      //
      // Create tree structure
      // by nesting pages according
      // to YAML data
      //
      var recursePages = function (arr, menuItems) {
        _.each(arr, function (menuItem) {
          var cls;

          if (_.isObject(menuItem)) {
            cls = findClass(extractFirstKey(menuItem));

            if (!cls) { return; }

            cls = _.clone(cls);
            cls.items = [];
            recursePages(extractFirstValue(menuItem), cls.items);
          } else {
            cls = findClass(menuItem);

            if (!cls) { return; }
          }

          menuItems.push(_.clone(cls));
        });
      };
      var categories = [];

      _.each(data, function (item) {

        var category = {};

        category.title = extractFirstKey(item);
        category.items = [];

        // iterate children and build menu structure
        recursePages(extractFirstValue(item), category.items);

        categories.push(category);
      });

      var createMenuItemLink = function (page, closeTag) {
        var link = "";
        var classes = [];              
        
        if (apiPage.data.title === page.name) {
          classes.push("current");
        }
        
        link += "<li class='" + classes.join(" ") + "'>";
        link += "<a href='/docs/api/classes/" + page.name + ".html'>" + page.name + "</a>";

        if (closeTag) {
          link += "</li>";
        }

        return link;
      };
      var createMenu = function (page) {

        // sub-items?
        if (page.items) {

          var menu = createMenuItemLink(page, false);

          menu += "<ul class='nav sub-nav'>";

          _.each(page.items, function (mi) {
            menu += createMenu(mi);
          });

          menu += "</ul></li>";

          return menu;
        } else {
          // single-link
          return createMenuItemLink(page, true);
        }
      };

      //
      // build menu recursively
      //

      var menu = "";

      _.each(categories, function (category) {

        // top-level are always categories
        menu += "<div class='panel panel-primary'>";
          menu += "<div class='panel-heading'><h3 class='panel-title'>" + category.title + "</h3></div>";
          menu += "<div class='panel-body'>";
          // does this item have sub-items?
          if (category.items.length > 0) {
            menu += "<ul class='nav sub-nav'>";

              // iterate sub-menu items and recursively construct any level of
              // sub-navigation
              _.each(category.items, function (page) {
                menu += createMenu(page);
              });

            menu += "</ul>";
          }
          menu += "</div>";
        menu += "</div>";

      });

      return menu;
    }

  };
  
  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
