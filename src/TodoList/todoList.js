import React from 'react'
import { connect } from 'react-redux'
const stateToProps = state => {
  return {
    inputValue: state.inputValue
  }
}
const dispatchToProps = dispatch => {
  return {
    inputChange(e) {
      const inputAction = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(inputAction)
    }
  }
}
function MyTodoList(props) {
  let { inputValue, inputChange } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputChange.bind(this)} />
        <button>提交</button>
      </div>
      <ul>
        <li>JSPang</li>
      </ul>
    </div>
  )
}
export default connect(stateToProps, dispatchToProps)(MyTodoList)
