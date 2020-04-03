import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer) // 创建一个仓库存储得内容

export default store
