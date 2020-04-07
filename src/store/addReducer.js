export default (state = 0, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'Add') {
    newState++
    return newState
  }
  return state
}
