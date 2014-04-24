// TODO clean this up

var _ = require('lodash');
var path = require('path');
var Handlebars = require('handlebars');

var compileHtml = function (hbs) {
  if (!hbs) return "";
  
  try{
    return Handlebars.compile(hbs)({});
  } catch (err) {
    return '<div class="alert alert-danger">' + err + '</div>';
  }
};

var mapApiMethodToDto = function (method, cls) {
  var dto = _.clone(method);
  
  dto.returnType = dto.return && dto.return.description;
  dto.description = compileHtml(dto.description);
  dto.isPrivate = dto.access === "private";
  
  if (dto.params) {
    dto.paramList = createParamsList(dto.params);
    
    dto.params = dto.params.map(function (p) {
      p.description = compileHtml(p.description);
      return p;
    });
  }
  
  if (cls.extends === dto.class) {
    dto.extended_from = cls.extends;
  }
  
  return dto;
};

var mapApiPropertyToDto = function (prop) {
  prop.description = compileHtml(prop.description);
  
  return prop;
};

var createParamsList = function (params) {
  if (!params) return "";
  
  return params.map(function (p) { 
    return p.name + (p.optional ? "?" : "") + " : " + p.type; 
  }).join(", ");
};

module.exports = function (params, callback) {
  
  'use strict';
  var assemble = params.assemble;
  
  var options = params.context;
  var grunt   = params.grunt;
  
  var yui     = assemble.options.yui || {};
  var pages   = assemble.options.pages;
  
  var async   = grunt.util.async;
  
  grunt.log.writeln("Executing plugin YUI");
  
  if (!yui.data) {
    grunt.log.writeln("No YUI JSON data passed, skipping");
    return;
  } else {
    grunt.log.writeln("Reading in " + yui.data + " file");    
  }
  
  var api = grunt.file.readJSON(yui.data);
  
  // register helpers
  Handlebars.registerHelper('crossLink', function (expr) {
    expr = Handlebars.Utils.escapeExpression(expr);
    
    expr = expr.split('/');
    
    var className = expr[0];
    var memberName = expr.length > 1 ? expr[1].split(':')[0] : "";
    var type = expr.length > 1 ? expr[1].split(':')[1] : "";
    
    // TODO support Type/method:method syntax
    if (api.classes[className]) {
      var result = '<a href="' + className + assemble.options.ext + (memberName ? '#' + memberName : '') + '">' + className + (memberName ? '.' + memberName + ' ' + type : '') + '</a>';
    
      return new Handlebars.SafeString(result);
    } else {
      return className;
    }
  });
  
  // generate API documentation
  var classPath = 'partials/class.html';
  var classPage = grunt.file.read(classPath);
  var destFile, apiDto, apiRaw, apiMethods, apiProps;
  
  for (var className in api.classes) {
    
    if (!api.classes.hasOwnProperty(className)) { continue; }
    
    destFile = path.join(yui.dest, 'classes', className + assemble.options.ext);
    
    // modify API data a bit that we pass to class partial
    apiRaw = api.classes[className];
    apiMethods = api.classitems.filter(function (classitem) {
      var isMember    = classitem.itemtype === 'method' && classitem.class === className;
      var isInherited = classitem.itemtype === 'method' && classitem.class === apiRaw.extends;
      
      // TODO follow inheritance chain
      
      return isMember || isInherited;
    });
    apiProps = api.classitems.filter(function (classitem) {
      
      // TODO follow inheritance chain
      
      return classitem.itemtype === 'property' && classitem.class === className;
    });
    apiDto = {};
    apiDto.title = apiRaw.name;
    apiDto.uses = apiRaw.uses;
    apiDto.extends = apiRaw.extends;
    apiDto.extension_for = apiRaw.extension_for;
    apiDto.is_constructor = apiRaw.is_constructor;
    apiDto.moduleName = apiRaw.name;
    apiDto.classDescription = Handlebars.compile(apiRaw.description)({});
    apiDto.methods = apiMethods.map(function (m) { return mapApiMethodToDto(m, apiRaw); });
    apiDto.params = apiRaw.params;
    apiDto.properties = apiProps.map(mapApiPropertyToDto);
    
    if (apiRaw.is_constructor) {
      apiDto.paramList = createParamsList(apiRaw.params);
    }
    
    pages.push({
      _page: 'all',
      dirname: path.dirname(destFile),
      filename: path.basename(destFile),
      pagename: path.basename(destFile),
      pageName: path.basename(destFile),
      basename: path.basename(classPath, path.extname(classPath)),
      src: classPath,
      dest: destFile,
      assets: assemble.options.assets,
      ext: assemble.options.ext,
      extname: assemble.options.ext,
      page: classPage,
      data: apiDto,
      filePair: {
        orig: {},
        src: [classPath],
        dest: destFile
      }  
    });
  }  
  
  callback();
};

module.exports.options = {
  stage: 'render:pre:pages'
};