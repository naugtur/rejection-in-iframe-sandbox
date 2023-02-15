window.runThat1 = function (code) {
    eval(code);
};
window.runThat2 = eval;
window.runThat3 = function (code, borrowedEval) {
    borrowedEval(code);
};
window.runThat4 = function (code, borrowedEval) {
    var eval = borrowedEval;
    eval(code);
};