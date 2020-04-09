import React from "react"

export default class Child extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount(){
    console.log('Will Mount');
  }
  componentDidMount(){
    console.log('Did Mount');
  }
  
  componentWillReceiveProps(newProps){
    // 接收父组件的参数
    console.log("Receive Props:", newProps)
  } 

  shouldComponentUpdate(){
    console.log("should update")
    return true
  }
  componentWillUpdate(){
    console.log("Will Update")
  }
  componentDidUpdate(){
    console.log("Did Update")
  }

  render(){
    return (
      <div>
        <h1>Child Component</h1>
        <p>Life count: {this.props.name}</p>
      </div>
    )
  }

}