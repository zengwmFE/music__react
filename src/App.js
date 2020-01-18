import testImg from '@/assets/img/fix.png'
import _ from 'lodash'
import React from 'react'
import './App.scss'
import './fix.scss'
import Footer from './footer/footer'
import Nav from './nav/nav'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: []
    }
  }
  componentWillMount() {
    let { testa, testb } = { testa: 1, testb: 2 }
    console.log(testa, testb, '我是123')
    this.setState({
      a: [1, 2, 3]
    })

    console.log(_.join(this.state.a, '-'), this.state.a)
  }
  componentDidMount() {}
  shouldComponentUpdate() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  render() {
    return (
      <div className="App">
        <div>
          <img src={testImg} alt="测试" />
          <Nav />
        </div>
        <p>{this.state.a}</p>
        <p>这是我啊</p>
        <p>这是我啊</p>
        <Footer a={this.state.a} />
      </div>
    )
  }
}

export default App
