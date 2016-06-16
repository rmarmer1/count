// Understands how to update a CountView and CountModel when the
// increment button is clicked.

"use strict";

(function(exports) {
  function CountController(document, countModel, countView, countPersister) {
    this._document = document;
    this._countModel = countModel;
    this._countView = countView;
    this._countPersister = countPersister;

    var self = this;
    this._countPersister.get(function(count) {
      self._countModel.set(count);
      self._updateCountView();
    });

    this._setupButtonToIncrementCount();
  };

  CountController.prototype = {
    _setupButtonToIncrementCount: function() {
      var self = this;
      this._document
        .getElementById("increment")
        .addEventListener("click", function() {
          self._countModel.increment();
          self._countPersister.set(self._countModel.count());
          self._updateCountView();
        });
    },

    _updateCountView: function() {
      this._countView.display(this._countModel.count());
    }
  };

  exports.CountController = CountController;
})(this);
