import React from 'react'
import { Consumer } from '../App'
export default class LittleFooter extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  componentDidMount() {
    let value = this.context
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
    console.log(value, 'componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    // 即将过期的生命周期
    console.log('获取到了新的props', nextProps, this.props)
  }
  componentDidUpdate() {
    // 可以执行state后的重新渲染后的操作，而不是使用setState的callback
    console.log(this.props, 'litterFooter DidUpdate')
  }
  componentWillUnmount() {
    let value = this.context
    /* ... */
    console.log(value, 'componentWillUnmount')
  }
  render() {
    return <Consumer>{value => <p>父组件传的内容=>{value}</p>}</Consumer>
  }
}
