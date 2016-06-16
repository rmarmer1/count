"use strict";

(function() {
  window.addEventListener("load", function() {
    new CountController(document,
                        new CountModel(),
                        new CountView(document),
                        new CountPersister($));
  });
})();
