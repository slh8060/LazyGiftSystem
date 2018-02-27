const qs = require('qs');
const Mock = require('mockjs');

const Random = Mock.Random;

const Dashboard = Mock.mock({
  'data|100': [{
    'id|+1': 1,
    'name': () => {
      return Random.cname();
    },
    'mobile': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
    'avatar': () => {
      return Random.image('125x125');
    },
    'status|1-2': 1,
    'email': () => {
      return Random.email('visiondk.com');
    },
    'isadmin|0-1': 1,
    'created_at': () => {
      return Random.datetime('yyyy-MM-dd HH:mm:ss');
    },
    'updated_at': () => {
      return Random.datetime('yyyy-MM-dd HH:mm:ss');
    },
  }],
  page: {
    total: 100,
    current: 1,
  },
});

module.exports = {
  'GET /dashboard'(req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.page || 1;

    let data;
    let newPage;

    let newData = Dashboard.data.concat();

    //数据开始模拟
    if (page.field) {
      const d = newData.filter((item) => {
        return item[page.filed].indexOf(page.keyword) > -1;
      });

      data = d.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      newPage = {
        current: currentPage * 1,
        total: d.length,
      };
    } else {
      data = Dashboard.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      Dashboard.page.current = currentPage * 1;

      newPage = {
        current: Dashboard.page.current,
        total: Dashboard.page.total,
      }
    }

    setTimeout(() => {
      res.json({      //将请求json格式返回
        success: true,
        data,
        page: '123',
      });
    }, 200);
  },
}
