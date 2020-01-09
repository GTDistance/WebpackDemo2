exports.test = function () {
  console.info('这是一个测试')
}
console.log(module.exports); //能打印出结果为：{}
console.log(exports); //能打印出结果为：{}
