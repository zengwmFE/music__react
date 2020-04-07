const defaultValue = {
  list: ['早上4点起床，锻炼身体', '中午下班游泳一小时']
}
export default (state = defaultValue.list, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'deleteItem') {
    newState.splice(action.index, 1)
    return newState
  }
  return state
}
