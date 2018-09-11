// let name = '孙小英'
// let allName = `${name}学习webpack`
// document.getElementById('study').innerHTML = allName
let num = [
  {
    name: '小蛮',
    value: '11'
  },
  {
    name: '小黄',
    value: '12'
  },
  {
    name: '小里',
    value: '10'
  },
  {
    name: '小呗',
    value: '9'
  },
  {
    name: '小话',
    value: '100'
  },
]
let temp = ''
for(let item of num){
  temp += `我是main2里面的${item.name}:${item.value}<br>`
}
document.getElementById('study').innerHTML = temp