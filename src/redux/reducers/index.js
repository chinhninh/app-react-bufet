import {combineReducers} from 'redux';
import questionReducer from './questionReducer/questionReducer';

const allReducers = combineReducers({
    questionReducer
})

export default allReducers;