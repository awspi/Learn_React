import React from "react";
import HelloWorld from "./components/helloWorld";


class App extends React.Component {
HelloWorld
  constructor() {
    super()
    this.state = {
      message: 'hello react',
      isShow:false
    }
  }

  switchDisplay(){
    this.setState({
      isShow:!this.state.isShow
    })
  }

  render() {
    const { message ,isShow} = this.state


    return (
      <div>
        <h2>{message}</h2>
        <h2>{isShow?'show':'not'}</h2>
        <button onClick={()=>this.switchDisplay()}>toggle</button>
        {isShow&&  <HelloWorld name={'pithy'} age={22}/>}
      </div>
    )
  }
}
export default App
