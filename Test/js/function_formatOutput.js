// Unit Test Case for the function formatOutput

QUnit.test( "Positive Test Case for the function formatOutput", function( assert ) {
  var input = [0,1,0,1,0,0,1,1];
  var expected_output = "1 x £1, 1 x 20p, 1 x 2p, 1 x 1p"; 
  assert.deepEqual( expected_output, formatOutput(input), "Positive Test Case Passed for the function formatOutput" );
});

QUnit.test( "Negative Test Case for the function formatOutput", function( assert ) {
  var input = [1,0,1,0,0,1,1];
  var result = "1 x £1, 1 x 20p, 1 x 2p, 1 x 1p"; 
  assert.notEqual( result, formatOutput(input), "Negative Test Case Passed for the function formatOutput" );
});