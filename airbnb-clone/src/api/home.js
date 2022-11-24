import request from 'utils/request'

export function getHomeGoodPriceData() {
  return request({
    url: "/home/goodprice"
  })
}
export function getHomeHighScoreData() {
  return request({
    url: "/home/highscore"
  })
}
export function getDiscountData() {
  return request({
    url: "/home/discount"
  })
}
export function getHomeHotRecommendData() {
  return request({
    url: "/home/hotrecommenddest"
  })
}
export function getHomeLongforData() {
  return request({
    url: "/home/longfor"
  })
}
export function getHomePlusData() {
  return request({
    url: "/home/plus"
  })
}
