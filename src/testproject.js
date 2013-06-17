
var testproject = {};

testproject.version = '0.9.0 unstable';

testproject.sayHello = function () {
  var localVariable = 2;
  function localFunction(argument1, argument2) {
    localVariable = 'Hello';
    return 'Hello World' + argument1 + argument2;
  }
  return localFunction();
};
