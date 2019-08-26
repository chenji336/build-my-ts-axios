# 通过typescript来重构axios(基础库)

## typescript开发基础库脚手架工具：typescrit-library-starter

[网站](https://github.com/alexjoverm/typescript-library-starter)

## 实现params的url功能

#### 需要实现的方法

[x] 空值不上传：null || undefined
[x] 类型
  - [x] 数组形式：params[]=xxx&params[]=yyy
  - [x] object形式：param={x:100}
  - [x] date形式： params=date,需要date.toISOString()
[x] 值保留和去除
  1. [x] 不上传hash值 先执行
  2. [x] 保留之前的值
[x] 特殊字符保留：params=@:/ x

#### 思路整理

都变成一个整体之后再处理：
1. 参数都当成是数组
2. 对数组进行处理
3. 处理之后的`key:value`保存在`vlaues:string[]`中
4. values.join('&')
5. url进行`丢弃hash`和`保留之前参数`处理
