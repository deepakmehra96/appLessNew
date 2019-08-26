var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LoginSchema = new Schema({
    password:  {
   	 	type: String,
  	},
  	username: {
        type: String,
        unique: true,
        required: 'Username is required',
    },
});
module.exports = mongoose.model('login', LoginSchema);
