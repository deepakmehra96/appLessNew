var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DataArray = new Schema({
    graphArray: Array,
    cardChartArray: Array,
    clickCardsArray: Array,
    timeCardsArray: Array
});
module.exports = mongoose.model('data', DataArray);
