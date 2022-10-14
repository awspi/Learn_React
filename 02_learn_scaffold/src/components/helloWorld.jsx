import React from "react";
import PropTypes from 'prop-types'
import Add from './add';
class HelloWorld extends React.Component {

  static defaultProps={
    name:'default'
  }

  constructor(props) {
    super(props)

    
    this.state = {
      message: 'hello world',
      age:this.props.age
    }
  }
componentDidMount(){
  console.log('组件挂载后（插入 DOM 树中）立即调用');
}
componentDidUpdate(){
  console.log('在更新后会被立即调用，首次渲染不会执行此方法');
}

componentWillUnmount(){
  console.log('在组件卸载及销毁之前直接调用');
}

//获取DOM更新前的一些信息
getSnapshotBeforeUpdate(prevProps,prevState,snapshot){
  console.log(prevProps,prevState,snapshot);
  return{
    scrollPosition:1000
  }
}

//是否需要更新 如果return false 则不会更新
// shouldComponentUpdate(){
//   // return false
// }

changeMsg(){
  this.setState({
    message:this.state.message+'~'
  })
}
changeCounter(count){
   this.setState({
    age:this.state.age+count
   })
}

  render() {
    const {name}=this.props
    const { message,age } = this.state
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        
        
        <Add addClick={(count)=>this.changeCounter(count)}/>

        
        <button onClick={()=>this.changeMsg()}>update</button>
        <h2>{message}</h2>
      </div>
    )
  }
}

HelloWorld.propTypes={
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}

// HelloWorld.defaultProps={
//   name:'defaultName'
// }

export default HelloWorld
