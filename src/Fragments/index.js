import React from 'react'

export default class FramgmentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  componentDidMount() {
    console.log(this.myRef.current.innerHTML)
  }
  render() {
    let flag = false
    let myList = ['我是一个测试账号', '我真的是测试账号的']

    return (
      <React.Fragment>
        {myList.map((item, key) => (
          <td key={key} ref={this.myRef}>
            {item}
          </td>
        ))}
      </React.Fragment>
    )
  }
}
