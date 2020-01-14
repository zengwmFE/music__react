import testImg from '@/assets/img/fix.png'
import React from 'react'
import './App.scss'
import './fix.scss'
class App extends React.Component {
  // constructor(props) {
  //   super(props)

  // }
  componentWillMount() {
    let { testa, testb } = { testa: 1, testb: 2 }
    console.log(testa, testb, '我是123')
    new Promise((resolve, reject) => {
      console.log(2)
      resolve(1)
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <img src={testImg} alt="测试" />
        </div>
        <p>这是我啊</p>
        <p>这是我啊</p>
        <p>这是我啊</p>
      </div>
    )
  }
}

export default App
