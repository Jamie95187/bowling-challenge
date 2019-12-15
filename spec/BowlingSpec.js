'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('should add the number of pins knocked to the scorecard', function(){
    bowling.addScore([5,5]);
    expect(bowling.scorecard).toContain([5,5]);
  });

  it('should return return true if the frame before last was a spare', function(){
    bowling.addScore([5,5]);
    bowling.addScore([4,]);
    expect(bowling.isPrevSpare()).toBeTruthy();
  });

  it('should return false if the frame before the last was not a spare', function(){
    bowling.addScore([4,5]);
    bowling.addScore([2,]);
    expect(bowling.isPrevSpare()).toBeFalsy();
  });

  it('should return false if there has only been one frame played', function(){
    bowling.addScore([4,5]);
    expect(bowling.isPrevSpare()).toBeFalsy();
  });

  it('should return true if the frame before last was a strike', function(){
    bowling.addScore([10,'-']);
    bowling.addScore([2,8]);
    expect(bowling.isPrevStrike()).toBeTruthy();
  });

  it('should return false if the frame before last was not a strike', function(){
    bowling.addScore([7, 0]);
    bowling.addScore([10,'-']);
    expect(bowling.isPrevStrike()).toBeFalsy();
  });

  it('should return false if only one frame has been played', function(){
    bowling.addScore([1,8]);
    expect(bowling.isPrevStrike()).toBeFalsy();
  });

  it('should return true if the last frame was a spare', function(){
    bowling.addScore([5,5]);
    expect(bowling.isSpare()).toBeTruthy();
  });

  it('should return false if the last frame was not a spare', function(){
    bowling.addScore([5,4]);
    expect(bowling.isSpare()).toBeFalsy();
  })

  it('should return true if the last frame was a strike', function(){
    bowling.addScore([10,'-']);
    expect(bowling.isStrike()).toBeTruthy();
  });

  it('should return false if the last frame was not a strike', function(){
    bowling.addScore([9,1]);
    expect(bowling.isStrike()).toBeFalsy();
  });

  it('should return the accumulated total score of 9', function(){
    bowling.addScore([4,5]);
    bowling.updateTotal();
    expect(bowling.total).toEqual(9);
  });

  // it('should return the accumulated total score of 15', function(){
  //   bowling.addScore([9,1]);
  //   bowling.addScore([5,]);
  //   bowling.updateTotal();
  //   expect(bowling.total).toEqual(15);
  // });

});