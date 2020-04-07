import { combineReducers } from 'redux'
import addReducer from './addReducer'
import deleteReducer from './deleteReducer'
import inputReducer from './inputReducer'

export default combineReducers({
  inputValue: inputReducer,
  btnValue: addReducer,
  list: deleteReducer
})
