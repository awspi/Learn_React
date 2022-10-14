import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class HomeInfo extends Component {
  render() {
    // 4.第四步操作: 获取数据, 并且使用数据
    console.log(this.context)

    return (
      <div>
        <h2>HomeInfo: {this.context.color}</h2>
        <UserContext.Consumer>
          {
            val=><h2>nickName {val.nickname}</h2>
          }
        </UserContext.Consumer>
      </div>
    )
  }
}
HomeInfo.contextType = ThemeContext

export default HomeInfo
