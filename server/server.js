var express = require('express');
var app = express();
var PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.static('server/public'));
// Global variable that will contain all of the
// calculation objects:
var calculations = [];
// Here's a wonderful place to make some routes:
// GET /calculations
app.get('/calculations', function (req, res) {
    console.log('we got a get req', calculations);
    res.send(calculations);
});
// POST /calculations
// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸
// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
    PORT = 5002;
}
// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
var server = app.listen(PORT, function () {
    console.log('server running on: ', PORT);
});
// server.setTimeout(500)
// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = function () {
    server.close();
};
app.setCalculations = function (calculationsToSet) {
    calculations = calculationsToSet;
};
module.exports = app;
