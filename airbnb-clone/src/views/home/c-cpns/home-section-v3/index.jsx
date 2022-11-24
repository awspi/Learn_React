import SectionHeader from '@/components/section-header'
import React, { memo } from 'react'
import propTypes from 'prop-types'
import { SectionV3Wrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo(({infoData}) => {
  console.log(infoData);


  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='room-list'>
      <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter />
    </SectionV3Wrapper>
  )
})
HomeSectionV3.propTypes={
  infoData:propTypes.object
}

export default HomeSectionV3
