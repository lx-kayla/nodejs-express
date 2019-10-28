var express = require('express');
var router = express.Router();
const { createTask } = require('../controller/online')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next){
  debugger
  const result = createTask();
  return result.then((data)=>{
    res.json(
      new SuccessModel(data)
    )
  })
})
module.exports = router;
