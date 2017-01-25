// Unit Test Case for the function validateInput

// Invalid Input Test Cases
QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "Invalid Input !";
  var input = "13x";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input 13x");
});

QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "Invalid Input !";
  var input = "13p.02";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input 13p.02");
});

QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "Invalid Input !";
  var input = "£p";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input £p");
});


//Valid Input Test Cases
QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "2 x £2, 1 x 20p, 1 x 10p, 1 x 2p";
  var input = "432";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input 432");
});

QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "1 x £2, 1 x 10p, 1 x 2p, 1 x 1p";
  var input = "213p";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input 213p");
});

QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "8 x £2, 1 x 20p, 1 x 2p, 1 x 1p";
  var input = "£16.23p";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input £16.23p");
});

QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "7 x £2";
  var input = "£14";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input £14");
});

QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "27 x £2, 2 x 2p";
  var input = "£54.04";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input £54.04" );
});

QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "11 x £2, 1 x £1, 1 x 20p, 1 x 10p, 1 x 2p, 1 x 1p";
  var input = "£23.33333";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input £23.3333" );
});

QUnit.test( "Testing function validateInput", function( assert ) {
  var expected_output = "1 x £1, 2 x 20p, 1 x 1p";
  var input = "001.41p";
  assert.deepEqual( expected_output, validateInput(input), "function validateInput Passed for the input 001.41p" );
});