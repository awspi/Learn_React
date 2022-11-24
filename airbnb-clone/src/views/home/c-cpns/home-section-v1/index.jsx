import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo } from 'react'
import propTypes from 'prop-types'
import { SectionV1Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo(({infoData}) => {
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionRooms roomList={infoData.list}/>
      <SectionFooter/>
    </SectionV1Wrapper>
  )
})
HomeSectionV1.propTypes={
  infoData:propTypes.object
}

export default HomeSectionV1
