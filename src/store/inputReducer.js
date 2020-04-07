export default (state = 'write Something', action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'change_input_value') {
    newState = action.value
    return newState
  }
  return state
}
