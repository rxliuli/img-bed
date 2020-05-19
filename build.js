const path = require('path')
const fs = require('fs')

const prefix = 'https://img.rxliuli.com/'

try {
  console.log('开始读取图片列表')
  const list = fs.readdirSync(path.resolve(__dirname, '.'))

  console.log('开始进行转换图片列表')
  const urlList = list
    .filter(name => name.endsWith('.png'))
    .map(name => prefix + name)

  console.log('开始写入配置文件')
  fs.writeFileSync(
    path.resolve(__dirname, 'DataList.json'),
    JSON.stringify(urlList),
    {
      encoding: 'utf8',
    },
  )
} catch (e) {
  console.log('构建发生了错误: ', e)
}
