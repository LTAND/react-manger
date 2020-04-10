import React from "react"
import Child from "./Child"
import {Button} from "antd"

import "./index.less"

export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // 另外一种设置属性
  // state = {
  //   count:0
  // }
  handleAdd = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  handleClick() {
    this.setState({
      count: this.state.count+1
    })
  }


  render() {
    let style = {
      padding: 50
    }
    return (
      <div style={style}>
        <h2 className="content">Life component</h2>
        <p>{this.state.count}</p>
        <Button type="primary">antd Button</Button>
        <button onClick={this.handleAdd}>点击一下</button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <Child name={this.state.count}/>
      </div>
    )
  }
}