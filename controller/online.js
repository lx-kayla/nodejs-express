// const xss = require('xss');
// const {exec} = require('../bin/db.js')

const createTask = ()=>{
    return {
      status: 0,
      msg: '成功',
      data: '我是创建接口'
    }
}

module.exports = {
  createTask
}