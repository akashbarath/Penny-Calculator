// Unit Test Case for the function calculate

QUnit.test( "Testing function calculate", function( assert ) {
  var expected_output = [0,1];
  assert.deepEqual( expected_output, calculate(100), "function calculate Passed for Input 100" );
});

QUnit.test( "Testing function calculate", function( assert ) {
  var expected_output = [0,1,0,1,0,0,1,1]; 
  assert.deepEqual( expected_output, calculate(123), "function calculate Passed for Input 123" );
});