const expect = require('chai').expect;
const add = require('../js/numbers-funcs').add;
const even = require('../js/numbers-funcs').even;
const secondSmallest = require('../js/numbers-funcs').secondSmallest;
const uniqueNum = require('../js/numbers-funcs').uniqueNum;



describe('numbers tests', () => {
  it('add() should add two numbers', () => {
    var result1 = add(1, 2);
    var result2 = add(5, 11);
    var result3 = add(-10, 33);
    expect(result1).equal(3);
    expect(result2).equal(16);
    expect(result3).equal(23);
  });
  it('even() should give all even numbers', () => {
  	var result1 = even([1,2,3,4,5,6]);
  	var result2= even([2,4,6,8,10]);
  	var result3 = even([3,5,7,9,11])
  	expect(result1).to.eql([2,4,6])
  	expect(result2).to.eql([2,4,6,8,10])
  	expect(result3).to.eql([])
  });
  it('secondSmallest() should return the second smallest number', () => {
  	var result1 = secondSmallest([34, 1, 43, -32, 9]);
  	var result2 = secondSmallest([26,88,3,99]);
  	expect(result1).to.eql(1);
  	expect(result2).to.eql(26);
  })
  it("uniqueNum() should return the unique number", () => {
  		var result1 = uniqueNum([1,2,3,3,5,6]);
  		var result2= uniqueNum([2,4,6,8,10]);
  		expect(result1).to.eql([1,2,5,6]);
  		expect(result2).to.eql([2,4,6,8,10]);
  })


});
