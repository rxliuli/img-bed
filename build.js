const path = require('path')
const fs = require('fs')

const prefix = 'https://img.rxliuli.com/'
const list = fs.readdirSync(path.resolve(__dirname, '.'))

fs.writeFileSync(
  path.resolve(__dirname, 'DataList.json'),
  JSON.stringify(
    list.filter(name => name.endsWith('.png')).map(name => prefix + name),
  ),
  {
    encoding: 'utf8',
  },
)
