var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

var userSchema = mongoose.Schema({
    name: {
        firstName: String,
    lastName: String
    },
    created: Date
});
