import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rate } from 'antd';

const RoomItem = memo(({itemData,itemWidth}) => {
  return (
    <ItemWrapper verifyColor={itemData.verify_info?.text_color||'#39576a'} itemWidth={itemWidth||'25%'}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>
          {
            itemData.verify_info.messages.join(' * ')
          }
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>
        <div className='bottom'>
        <Rate allowHalf disabled defaultValue={itemData.star_rating ?? 5} style={{color:'#398288',fontSize:"9px"}}/>
        <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }

        </div>
      </div>
    </ItemWrapper>
  )
})

export default RoomItem
