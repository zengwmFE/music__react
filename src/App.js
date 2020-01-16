import testImg from '@/assets/img/fix.png'
import _ from 'lodash'
import React from 'react'
import './App.scss'
import './fix.scss'
import Nav from './nav/nav'
class App extends React.Component {
  // constructor(props) {
  //   super(props)

  // }
  componentWillMount() {
    let { testa, testb } = { testa: 1, testb: 2 }
    console.log(testa, testb, '我是123')
    let a = [1, 2, 3]
    console.log(_.join(a, '-'))
  }
  render() {
    return (
      <div className="App">
        <div>
          <img src={testImg} alt="测试" />
          <Nav />
        </div>
        <p>这是我啊</p>
        <p>这是我啊</p>
        <p>这是我啊</p>
      </div>
    )
  }
}

export default App
