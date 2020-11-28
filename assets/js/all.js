"use strict";

$(document).ready(function () {
  var page = window.location.pathname;
  page = page.replace('/', '');
  $('.nav a').each(function () {
    $(this).toggleClass('active', $(this).attr('href') == page);
  });
});
//# sourceMappingURL=all.js.map
