import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo, useCallback, useState } from 'react'
import propTypes from 'prop-types'
import { SectionV2Wrapper } from './style'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo(({infoData}) => {
  console.log(infoData);
  const [name, setName] = useState(Object.keys(infoData.dest_list)[0])
  /** 点击事件处理函数 */
  const tabClickhandle=useCallback((index,item)=>{
    console.log(index,item);
    setName(item)
  },[])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={infoData.dest_list&&Object.keys(infoData.dest_list)} tabClick={tabClickhandle}/>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%"/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})
HomeSectionV2.propTypes={
  infoData:propTypes.object
}

export default HomeSectionV2
