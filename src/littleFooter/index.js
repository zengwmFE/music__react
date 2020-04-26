import React from 'react'
export default class LittleFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidUpdate() {
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`)
    }, 3000)
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        {/* <Consumer>{(value) => <p>父组件传的内容=>{value}</p>}</Consumer> */}
        <div onClick={this.handleClick.bind(this)}>试试啊</div>
      </div>
    )
  }
}
