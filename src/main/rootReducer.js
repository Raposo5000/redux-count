import { combineReducers } from 'redux';
import countReducer from '../store/reducers/countReducer'

const ROOT_REDUCER = combineReducers({
  count: countReducer
})

export default ROOT_REDUCER