function test(message, assertionFunction) {
  console.log(message);
  assertionFunction();
  console.log("OK");
}

// DRY — Don't repeat yourself
function assert(val, message) {
  if (!val) {
    throw new Error(message);
  }
}

module.exports = {
  test,
  assert,
};
