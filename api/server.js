const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var csv = require("csvtojson");
var multer = require("multer")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.use(fileUpload());

app.get('/', (req, res) => {
    res.send({ a: 'hello' })
})

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         console.log('object')
//     cb(null, 'public')
//   },
//   filename: function (req, file, cb) {
//     console.log('object2')
//     cb(null, Date.now() + '-' +file.originalname )
//   }
// })

// var upload = multer({ storage: storage }).single('file')

// app.post('/file',function(req, res) {
//     upload(req, res, function (err) {
//         console.log(err)
//            if (err instanceof multer.MulterError) {
//                return res.status(501).json(err)
//            } else if (err) {
//                return res.status(500).json(err)
//            }
//       return res.status(200).send(req.file)

//     })

// });
var upload = multer({ inMemory: true}).single('csvfile');

app.post('/upload', (req, res) => {
    // console.log(req)
    console.log(req.files)
    var csvString = req.files.data.data.toString()
     converter.fromString(csvString, function(err,result){
         if(err)return res.send("ERR")
         res.send(result);
     })
    // res.send({ a: "req.body" })
})

app.listen('3005', () => { console.log('server running on 3005 port') })