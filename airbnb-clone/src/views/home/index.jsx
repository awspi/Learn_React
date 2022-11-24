import { fetchHomeDataAction } from '@/store/modules/home'
import { isObjEmpty } from '@/utils/is-empty-object'
import React, { memo, useEffect } from 'react'
import {shallowEqual,useSelector,useDispatch} from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import {HomeWrapper} from './style'

const Home = memo(() => {
  const { goodPriceInfo,highScoreInfo,discountInfo ,recommendInfo,longforInfo,plusInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
  // dispatch
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])


  return (
    <div>
      <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
      { isObjEmpty(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
      { isObjEmpty(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
      { isObjEmpty(longforInfo) && <HomeLongfor infoData={longforInfo}/> }
      { isObjEmpty(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
      { isObjEmpty(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
      { isObjEmpty(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
      </HomeWrapper>
    </div>
  )
})

export default Home
