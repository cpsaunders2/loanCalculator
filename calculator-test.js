
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 20000, years: 30, rate: 5.5};
  expect(calculateMonthlyPayment(values)).toEqual('113.56');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 20000, years: 30, rate: 5.5};
  expect(calculateMonthlyPayment(values)).toEqual('113.56');
});

/// etc
