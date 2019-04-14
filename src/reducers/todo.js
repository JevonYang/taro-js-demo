import {ADD_TODO_ITEM} from '../constants/todo'

const INITIAL_STATE = {
    list: ['item1', 'item2']
}
  
export default function todo (state = INITIAL_STATE, action) {
    switch (action.type) {
      case ADD_TODO_ITEM:
        const {list} = state;
        list.push(action.payload)
        let data = [...list]
        return {
          ...state,
          list: data
        }
      default:
        return state
    }
}
