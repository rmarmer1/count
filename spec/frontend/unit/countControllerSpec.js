"use strict";

describe("CountController", function() {
  var countController,
      documentMock,
      elementMock,
      countModelMock,
      countViewMock,
      countPersisterMock,
      clickHandler;

  beforeEach(function() {
    documentMock = { getElementById: null };
    elementMock = { addEventListener: null };
    spyOn(documentMock, "getElementById").and.returnValue(elementMock);
    spyOn(elementMock, "addEventListener")
      .and
      .callFake(function(_, inClickHandler) {
        clickHandler = inClickHandler;
      });

    countModelMock = { count: null, set: null, increment: null };
    spyOn(countModelMock, "count").and.returnValue(0);
    spyOn(countModelMock, "increment");
    spyOn(countModelMock, "set");

    countViewMock = { display: null };
    spyOn(countViewMock, "display");

    countPersisterMock = { get: null, set: null };
    spyOn(countPersisterMock, "get")
      .and
      .callFake(function(callback) {
        callback();
      });

    spyOn(countPersisterMock, "set");

    countController = new CountController(documentMock,
                                          countModelMock,
                                          countViewMock,
                                          countPersisterMock);
  });

  describe("::new", function() {
    it("should create new CountController instance", function() {
      expect(countController instanceof CountController).toBe(true);
    });

    it("should set countView to initial count", function() {
      expect(countViewMock.display).toHaveBeenCalledWith(0);
    });

    it("should set things up so button click updates count model", function() {
      clickHandler();
      expect(countModelMock.increment).toHaveBeenCalled();
    });

    it("should set things up so button click updates count view", function() {
      clickHandler();
      expect(countViewMock.display.calls.all()[0].args).toEqual([0]);

      // would actually be [1], but too brittle to mock incrementing
      // behaviour in mock
      expect(countViewMock.display.calls.all()[1].args).toEqual([0]);
    });
  });
});
