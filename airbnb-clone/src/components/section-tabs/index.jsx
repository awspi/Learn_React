import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'
import propTypes from 'prop-types'
import ScrollView from '@/base-ui/scroll-view'
const SectionTabs = memo(({tabNames=[],tabClick}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  /**
   * tab点击
   * @param {*} index 
   * @param {*} item 
   */
  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
  <TabsWrapper>
    <ScrollView>
      {
      tabNames.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames("item", { active: index === currentIndex })}
            onClick={e => itemClickHandle(index, item)}
          >
            {item}
          </div>
        )
      })
      }
    </ScrollView>
  </TabsWrapper>
  )
})
SectionTabs.propTypes={
    tabNames:propTypes.array
}

export default SectionTabs
