import _ from 'lodash'
import React from 'react'
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: '我是nav'
    }
  }
  componentWillMount() {
    const a = {
      b: 1
    }
    const c = _.cloneDeep(a)
    console.log(c, '我想123')
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.nav} times`
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.nav} update times`
  }
  setNav() {}
  render() {
    return <div onClick={this.setNav.bind(this)}>{this.state.nav}</div>
  }
}

export default Nav
