# whools
jQuery module production [no webpack, no es6] 

# 使用方法
`pageage.json` 中配置了启动脚本 `server`
本地启动一个http服务来跑静态站点

这是一个使用了require.js 模块化的函数库的项目，另外使用了Vue2.0浏览器版，不需要编译开发。为了解决浏览器对静态资源的自动缓存技术，对所有静态资源进行了版本号管理。

* 安装依赖 `npm i` -> npm install 简写，当然你也可以直接用yarn

* 启动项目 `npm run server`

这时浏览器会自动打开 localhost:4000 这个地址，但是你会看到没有页面的显示，这是项目不完整

```
// 浏览器输入
http://localhost:4000/modules/index/index.html

http://localhost:4000/modules/login/index.html

http://localhost:4000/modules/user/index.html

```

> 项目待进一步的完善......

# 目录结构

* api
* common
* components
* config
* lib
* modules
* static
