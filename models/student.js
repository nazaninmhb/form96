var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: Number,
    description: String,
});

var Student = mongoose.model('student', StudentSchema);
module.exports = Student;
