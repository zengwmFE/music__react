var defaultState = {
  inputValue: 'Write Something',
  btnValue: 0,
  list: ['早上4点起床，锻炼身体', '中午下班游泳一小时']
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'change_input_value') {
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'Add') {
    newState.btnValue++
    return newState
  }
  if (action.type === 'deleteItem') {
    newState.list.splice(action.index, 1)
    console.log(newState)
    return newState
  }
  return state
}
