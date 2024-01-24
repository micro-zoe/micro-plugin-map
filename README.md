微前端 Micro-app 地图插件，适配高德、百度、腾讯地图 🎉🎉🎉

### 使用

Installation

```bash
  # with npm
  npm install @micro-zoe/micro-plugin-map --save-dev
  # with yarn
  yarn add @micro-zoe/micro-plugin-map --dev
```

Usage
we use the package like this step:

1、主用，在入口处安装对应地图的sdk

- 高德sdk `https://webapi.amap.com/maps?v=2.0&key=xxxxxx`
- 腾讯sdk `https://map.qq.com/api/gljs?v=1.exp&key=xxxxxx`
- 百度sdk `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=xxxxxx`

2、在主应用中，使用该包

```js
  import microApp from '@micro-zoe/micro-app'
  import microPluginMap from '@micro-zoe/micro-plugin-map'

  // 设置为全局插件，作用于所有子应用
  microApp.start({
    plugins: {
      global: [microPluginMap],
    }
  })

  // 或者设置为某个子应用的插件，只作用于当前子应用
  microApp.start({
    plugins: {
      modules: {
        'appName': [microPluginMap],
      }
    }
  })
```

### 注意

- 目前插件目前仅在with沙箱下适用

- 插件以umd同步的方式引入sdk，异步加载的方式暂不支持

- 高德地图的不存在跨域问题，可以不用进行任何操作，高德地图若设置了使用白名单，需将白名单范围囊括主应用域名

- 腾讯地图，使用时候只是常规的跨越，用此插件进行常规使用即可，腾讯地图若设置了使用白名单，需将白名单范围囊括主应用域名

- 百度地图，使用时有跨域问题，可用此插件进行处理，百度地图若设置了使用白名单，需将白名单范围囊括主应用域名

### 源码
micro-plugin-map 源码地址：[https://github.com/micro-zoe/micro-plugin-map](https://github.com/micro-zoe/micro-plugin-map)

### 发布

```bash
  # with npm
  npm run build
  # with yarn
  yarn build

  npm login
  npm publish 
```