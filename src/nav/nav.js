import _ from 'lodash'
import React from 'react'
class Nav extends React.Component {
  componentWillMount() {
    const a = {
      b: 1
    }
    const c = _.cloneDeep(a)
    console.log(c, '我想')
  }
  render() {
    return <div>我是nav</div>
  }
}

export default Nav
