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

## 实现data的传递

[x] 普通对象需要默认添加`'Content-Type':'application/json;charset=utf-8'`,复杂对象直接使用
  - [x] 传入的headers需要被标准化,比如`content-type`需要转成`Content-Type`

优化点： !data&&headers['content-type'],delete headers['content-type']

## 获取响应数据（通过promise获取返回值）

返回值

[x] response
  - [x] status && statusText
  - [x] data:response && responseText,根据responseType来决定
  - [x] headers:xhr.getAllResponseHeaders()
[x] request = xhr
[x] config

还要完善的点(已经完成)

- data默认返回是string类型
- headers返回是string类型


