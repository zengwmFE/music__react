import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import MyTodoList from './todoList'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  render() {
    return (
      <Provider store={store}>
        <MyTodoList />
      </Provider>
    )
  }
}
export default TodoList
