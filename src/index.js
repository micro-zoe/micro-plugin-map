/**
 * @description 微前端 micro-app 地图插件
 * @returns plugin obj
 * @author iyogic
 * @date 2023-12-08 15:10:04
 */


const MAPS_ARR = [
  // 腾讯map
  'apikey.map.qq.com',
  'confinfo.map.qq.com',
  'overseactrl.map.qq.com',

  // 百度map
  'map.baidu.com',
  'dlswbr.baidu.com',
  'hm.baidu.com',

  // 高德map
  'webapi.amap.com',
  'a.amap.com'
]


/**
 * 如果函数返回 `true` 则忽略 script 和 link 标签的创建
 * @param {string} url
 * @returns boolean
 */
function MapExcludeCheckerHandler(url) {
  return MAPS_ARR.some((item) => url.includes(item));
}

/**
 * 如果函数返回 `true` ，则 micro-app 不会处理它，元素将原封不动进行渲染
 * @param {string} url
 * @returns boolean
 */
function MapIgnoreCheckerHandler(url) {
  return MAPS_ARR.some((item) => url.includes(item));
}

const microPluginMap = {
  // 可选，如果函数返回 `true` 则忽略 script 和 link 标签的创建
  excludeChecker: MapExcludeCheckerHandler ,
  // 可选，如果函数返回 `true` ，则 micro-app 不会处理它，元素将原封不动进行渲染
  ignoreChecker: MapIgnoreCheckerHandler
};

export default microPluginMap;
