import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class add extends Component {
  addCount(count){
    const click=this.props.addClick
    click(count)

  }
  render() {
    return (
      <div>
      <button onClick={(e)=>this.addCount(1)}>+1</button>
      <button onClick={(e)=>this.addCount(10)}>+10</button>  
      </div>
    )
  }
}
add.propTypes={
  addClick:PropTypes.func
}
export default add
