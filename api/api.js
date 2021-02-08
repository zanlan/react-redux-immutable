const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
router.get('/collectionget', (req, res) => {
    MongoClient.connect(
        'mongodb://localhost:27017/runoob',
        { useUnifiedTopology: true },
        function (err, db) {
            let result = '';
            if(req.method === 'POST'){
                result  = req.body; 
            }else{
                result  = req.query; 
            }
            db.db('runoob')
                .collection('site')
                .find({})
                .toArray((err, data) => {
                    res.json({
                        code: 200,
                        msg: '信息筛选成功',
                        result,
                        method:req.method,
                        data
                    });
                    db.close();
                });
        }
    );
});
router.post('/collectionpost', (req, res) => {
    MongoClient.connect(
        'mongodb://localhost:27017/runoob',
        { useUnifiedTopology: true },
        function (err, db) {
            let result = '';
            if(req.method === 'POST'){
                result  = req.body; 
            }else{
                result  = req.query; 
            }
            db.db('runoob')
                .collection('site')
                .find({})
                .toArray((err, data) => {
                    res.json({
                        code: 200,
                        msg: '信息筛选成功',
                        result,
                        method:req.method,
                        data
                    });
                    db.close();
                });
        }
    );
});
router.post('/sendCode', (req, res) => {
    MongoClient.connect(
        'mongodb://localhost:27017/runoob',
        { useUnifiedTopology: true },
        function (err, db) {
            let result = '';
            if(req.method === 'POST'){
                result  = req.body.mobile.slice(0,4); 
            }else{
                result  = req.query; 
            }
            db.db('runoob')
                .collection('site')
                .find({})
                .toArray((err, data) => {
                    res.json({
                        code: 200,
                        msg: '信息筛选成功',
                        result,
                        method:req.method,
                        data
                    });
                    db.close();
                });
        }
    );
});

module.exports = router;
