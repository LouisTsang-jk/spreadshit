# TODO
1. √构建开发环境(webpack)(HMR)
2. 渲染
3. Shadow Dom
  1. 解析JSX
  2. webpack打包html
  3. webpack-loader





[0,1,2,3,4],5,6,7,8
[0,1,2,3,4],5,6,7,8
[0,1,2,3,4],5,6,7,8
[0,1,2,3,4],5,6,7,8
0,1,2,3,4,5,6,7,8
0,1,2,3,4,5,6,7,8
0,1,2,3,4,5,6,7,8
0,1,2,3,4,5,6,7,8

data -> 
{
  0: { // 第0行
    0: { // 第0列
      params: {},
      plugins: ['mergeCell', 'RTF', 'border'],
      value: '<i style="color: red">这里是红字斜体<span style="color: blue">这里是蓝字</span></i>'
    },
    ...,
    length: 1
  },
  ...,
  length: 1
}


触发更改行高、列宽的事件
1. drag
2. min-height/min-width