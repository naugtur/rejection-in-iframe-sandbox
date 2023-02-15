window.runTest = function (name, testcase) {
  testcase(name);
};

window.rejectionTestFromScript = (name) => {
  Promise.resolve().then(() => {
    throw Error(name);
  });
};

window.exceptionTestFromScript = (name) => {
  setTimeout(() => {
    throw Error(name);
  }, 200);
};
