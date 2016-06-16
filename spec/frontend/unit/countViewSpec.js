"use strict";

describe("CountView", function() {
  var countView, documentMock, elementMock;

  beforeEach(function() {
    documentMock = { getElementById: null };
    elementMock = {};
    spyOn(documentMock, "getElementById").and.returnValue(elementMock);
    countView = new CountView(documentMock);
  });

  describe("::new", function() {
    it("should create new CountView instance", function() {
      expect(countView instanceof CountView).toBe(true);
    });
  });

  describe("#display", function() {
    it("should set innerHTML of countElement to passed count", function() {
      countView.display(1);
      expect(elementMock.innerHTML).toBe(1);
    });
  });
});
