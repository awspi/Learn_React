import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo(({roomList=[],itemWidth}) => {
  return (
    <RoomsWrapper>
      {
        roomList.slice(0,8).map((item)=>{
          return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>
        })
      }
    </RoomsWrapper>
  )
})

export default SectionRooms
