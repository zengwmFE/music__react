import testImg from '@/assets/img/fix.png'
import { Button, Input, Table } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import './App.scss'
import './fix.scss'
import FragmentComponent from './Fragments'
import LitterFooter from './littleFooter'
import Nav from './nav/nav'
export const { Provider, Consumer } = React.createContext('light')
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号'
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号'
        }
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address'
        }
      ],
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      inputValue: ''
    }
  }
  componentWillMount() {
    let { testa, testb } = { testa: 1, testb: 2 }
    console.log(testa, testb, '我是123')
    this.setState({
      a: [1, 2, 3]
    })
  }
  componentDidUpdate() {}
  start() {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      })
    }, 1000)
  }
  onSelectChange(selectedRowKeys) {
    this.setState({ selectedRowKeys })
  }
  onChange(ev) {
    this.setState({ inputValue: ev.target.value })
  }
  clkInput() {
    var inputValue = this.state.inputValue
    this.setState({
      inputValue: ++inputValue
    })
    this.setState({
      inputValue: ++inputValue
    })

    this.setState({
      inputValue: ++inputValue
    })
  }
  render() {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange.bind(this)
    }
    const hasSelected = selectedRowKeys.length > 0
    return (
      <div className="App">
        <div>
          <img src={testImg} alt="测试" onClick={this.clkInput.bind(this)} />
          <Nav />
        </div>
        <Provider value={this.state.a}>
          <LitterFooter inputValue={this.state.inputValue}>
            This is valid HTML &amp; JSX at the same time.
          </LitterFooter>
        </Provider>
        <div>
          <Input
            placeholder="Basic usage"
            value={this.inputValue}
            onChange={this.onChange.bind(this)}
          />
          <div>
            Hello <x-search>{this.state.inputValue}</x-search>!
          </div>
          <div style={{ marginBottom: 16 }}>
            <Button
              type="primary"
              onClick={this.start}
              disabled={!hasSelected}
              loading={loading}
            >
              Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table
            rowSelection={rowSelection}
            dataSource={this.state.dataSource}
            columns={this.state.columns}
          />
          <table border="1">
            <thead>
              <tr className="table__tr">
                <FragmentComponent />
              </tr>
            </thead>
            <tbody>
              <tr className="table__tr">
                <FragmentComponent />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App
