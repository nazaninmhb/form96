var express = require('express');
var router = express.Router();
var student = require('../models/student');

router.post('/', function (req, res, next) {
    console.log(req.body);
    var s = new student({
        name : req.body.name,
        email : req.body.email,
        field : req.body.field,
        phoneNumber : req.body.phone,
        description : req.body.description
    });
    s.save(function (err, print) {
        res.render('response', {
            name: s.name
        });
    });
});

router.get('/', function (req, res, next) {
   res.render('student');
});

router.get('/pp', function (req, res, next) {
   res.render('pp');
});

router.get('/:id', function(req, res, next) {
    student.findOne({_id: req.params.id }, function (err, student) {
        if(err || !print)
            return res.status(400).json({error: true, message: 'Invalid id'});
        //res.render('student', {print: student})
    })
});

module.exports = router;
