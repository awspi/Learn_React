import SectionHeader from '@/components/section-header'
import React, { memo } from 'react'
import propTypes from 'prop-types'
import { LongforWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'

const HomeLongfor = memo(({infoData}) => {
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='longfor-list'>
        <ScrollView>
          {
              infoData.list.map(item => {
                return <LongforItem itemData={item} key={item.city}/>
              })
          }
        </ScrollView>
      </div>

    </LongforWrapper>
  )
})
HomeLongfor.propTypes={
  infoData:propTypes.object
}

export default HomeLongfor
