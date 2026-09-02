(function () {
  var tag = "myamazon2006d-20";
  document.querySelectorAll('a[href*="amazon.com"]').forEach(function (a) {
    try {
      var u = new URL(a.href);
      u.searchParams.set("tag", tag);
      a.href = u.toString();
    } catch (e) {}
  });
})();
