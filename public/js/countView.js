// Understands how to display a count.

"use strict";

(function(exports) {
  function CountView(document) {
    this._countElement = document.getElementById("count");
  };

  CountView.prototype = {
    display: function(count) {
      this._countElement.innerHTML = count;
    }
  };

  exports.CountView = CountView;
})(this);
