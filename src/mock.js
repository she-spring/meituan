//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let list = [];
    for(let i = 0; i < 30; i++) {
        let listObject = {
            title: Random.csentence(5, 10),//随机生成一段中文文本。
            imgSrc: Random.dataImage('100x160', '这是图片中的文本'),
            attention_degree: Random.integer(100, 9999),//返回一个随机的整数。
        }
        list.push(listObject);
    }
    return {
        listData: list
    }
})