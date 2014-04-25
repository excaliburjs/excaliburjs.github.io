(function (undefined) {
  
  $(function () {

    //
    // Inheritance handling
    //
    var changeVisibility = function (checked) {
      if (checked) {
        $(".member-inherited").show();
      } else {
        $(".member-inherited").hide();
      }

      // mirror others
      $(".member-visibility input").prop("checked", checked);

      $.cookie('docs-inheritance', checked.toString(), { expires: 365 });
    };
    
    $(".member-visibility input").change(function (e) {
      var checked = $(this).is(":checked");

      changeVisibility(checked);

      return true;
    });

    // load inheritance setting
    var savedCookie = $.cookie('docs-inheritance');

    if (savedCookie !== undefined) {
      changeVisibility(savedCookie === 'true');
    }
  });
})();