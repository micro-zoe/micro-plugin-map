/**
 * @description 微前端 micro-app 地图插件
 * @returns plugin obj
 * @author iyogic
 * @date 2023-12-08 15:10:04
 */

// SDK
const MAPS_ARR_SDK = [
  // 百度MAP_SDK
  '//api.map.baidu.com',

  // 腾讯MAP_SDK
  '//map.qq.com/api/gljs'

  // 高德MAP_SDK 【高德无跨域问题无需处理】
  // "//webapi.amap.com/maps",
];

// JSONP
const MAPS_ARR_JSONP = [
  // 百度MAP
  'map.baidu.com',
  'dlswbr.baidu.com',
  'hm.baidu.com',
  'bdimg.com',

  // 腾讯MAP
  'apikey.map.qq.com',
  'confinfo.map.qq.com',
  'overseactrl.map.qq.com'
];

/**
 * 如果函数返回 `true` 则忽略 script 和 link 标签的创建
 * @param {string} url
 * @returns boolean
 */
function MapExcludeCheckerHandler(url: string): boolean {
  return MAPS_ARR_SDK.some((item) => url.includes(item));
}

/**
 * 如果函数返回 `true` ，则 micro-app 不会处理它，元素将原封不动进行渲染
 * @param {string} url
 * @returns boolean
 */
function MapIgnoreCheckerHandler(url: string): boolean {
  return [...MAPS_ARR_SDK, ...MAPS_ARR_JSONP].some((item) => url.includes(item));
}

const microPluginMap = {
  // 可选，如果函数返回 `true` 则忽略 script 和 link 标签的创建
  excludeChecker: MapExcludeCheckerHandler,
  // 可选，如果函数返回 `true` ，则 micro-app 不会处理它，元素将原封不动进行渲染
  ignoreChecker: MapIgnoreCheckerHandler
};

export default microPluginMap;
