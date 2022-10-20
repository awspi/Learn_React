import React, { Component ,createRef} from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state={
      username:'pithy',
      password:'',
      isAgree:false,
      hobbies:[
        {text:'唱',value:'sing',isChecked:false},
        {text:'跳',value:'dance',isChecked:false},
      ],
      foods:['apple'],
      intro:''
    }
    this.introRef=createRef()
  }
  onInputChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  onAgreeChange(event){
    this.setState({
      isAgree:event.target.checked
    })
  }
  handleHobbiesChange(event,index){
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({ hobbies })
  }
  onFoodChange(event){
    const values=Array.from(event.target.selectedOptions,(item)=>item.value)
    this.setState({ foods: values })
  }
  onSubmit(event){
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log("获取所有的输入内容")
    console.log(this.state.username, this.state.password)
    const hobbies = this.state.hobbies.filter(item => item.isChecked).map(item => item.value)
    console.log("获取爱好: ", hobbies)
    console.log("获取结果:", this.introRef.current.value)

    // 3.以网络请求的方式, 将数据传递给服务器(ajax/fetch/axios)
  }


  render() {
    const {username,password,isAgree,hobbies,foods,intro} =this.state
    return (
      <div>
        <form onSubmit={(e)=>this.onSubmit(e)}>
                  {/* username */}
     <label htmlFor={username}>
      <input type="text" value={username} name='username' onChange={(e)=>this.onInputChange(e)}/>
     </label>
     {/* pwd */}
     <label htmlFor={password}>
      <input type="password" value={password} name='password' onChange={(e)=>this.onInputChange(e)}/>
     </label>
     {/* checkbox */}
    <label htmlFor={password}>
      <input id='agree' type="checkbox" checked={isAgree} onChange={(e)=>this.onAgreeChange(e)}/>
      agree
    </label>
    {/* hobbies */}
      <div>
      {hobbies.map((item,index)=>{
        return (
          <label htmlFor={item.value} key={item.value}>
            <input 
              type="checkbox"
              id={item.value} 
              checked={item.isChecked}
              onChange={e => this.handleHobbiesChange(e, index)}
            />
            <span>{item.text}</span>
          </label>
          )
          })}
      </div>
    {/* select */}
    <select value={foods} onChange={e => this.onFoodChange(e)} multiple>
      <option value="apple">苹果</option>
      <option value="orange">橘子</option>
      <option value="banana">香蕉</option>
    </select>
    {/* 非受控 */}
    <input type="text" defaultValue={intro} ref={this.introRef} />
    <div> 
      <button type='submit'>注册</button>
    </div>
    </form>
      </div>
    )
  }
}

export default App
