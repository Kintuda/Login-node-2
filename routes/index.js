var express  = require('express');
var router   = express.Router();
var Correios = require('node-correios'),
correios = new Correios();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res,next){
  const cep = req.body.cep;
  console.log(cep);
  correios.consultaCEP({cep:cep}, function(err, result){
    if(result==undefined){
      res.render('index',{cidade:"Cep Inválido"})
    }else{
    res.render('index',{cidade:result})
    }
  })
})

module.exports = router;
