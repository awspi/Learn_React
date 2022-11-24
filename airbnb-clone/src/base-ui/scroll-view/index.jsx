import React, { memo, useEffect, useRef, useState } from 'react'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {

  /**定义内部状态 */
  const [showBtnRight,setShowBtnRight]=useState(false)
  const [showBtnLeft,setShowBtnLeft]=useState(false)
  const [posIndex, setPosIndex] = useState(0) //* 显示的首元素下标
  /**组件渲染完毕 判断是否显示右侧按钮 */
  const contentRef=useRef() //* 容器ref
  const totalDistanceRef=useRef() //* 剩余可滚动距离ref

  useEffect(()=>{
    const scrollWidth=contentRef.current.scrollWidth //*一共可以滚动的宽度
    const clientWidth = contentRef.current.clientWidth //* 本身占据的宽度
    const scrollDistance=scrollWidth-clientWidth //* 剩余可滚动距离
    totalDistanceRef.current=scrollDistance //* 最初的可滚动距离
    setShowBtnRight(scrollDistance>0)//?如果剩余可滚动距离>0 显示right按钮
  },[props.children])

  /**事件处理 */
  function controlClickHandle(isRight){
      const newIndex=isRight ? posIndex+1 : posIndex-1
      console.log('-------------------',totalDistanceRef.current);
      //old
      console.log(contentRef.current.children[posIndex],contentRef.current.children[posIndex].offsetLeft);
      const newEl=contentRef.current.children[newIndex] //* 显示的第一个元素
      const newOffsetLeft = newEl.offsetLeft
      console.log(newEl,newOffsetLeft);
      console.log(totalDistanceRef.current -newOffsetLeft);
 
      contentRef.current.style.transform=`translate(-${newOffsetLeft}px)`
      setPosIndex(newIndex) //?设置新的首元素下标
      //? 是否继续显示右侧的按钮
      setShowBtnRight(totalDistanceRef.current > newOffsetLeft) //?如果剩最初的可滚动距离>首元素offsetLeft 显示right按钮
      setShowBtnLeft(newOffsetLeft > 0) //? 如果首元素下标>0(第一个元素不在容器视口内的首位) 显示left按钮
  }
  return (
    <ViewWrapper>


      {showBtnLeft&&<div className='control left' onClick={e=>controlClickHandle(false)}><IconArrowLeft/></div>}
      {showBtnRight&&<div className='control right' onClick={e=>controlClickHandle(true)}><IconArrowRight/></div>}
      <div className='scroll'>
        <div className='scroll-content' ref={contentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView
