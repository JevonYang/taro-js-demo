import {ADD_TODO_ITEM} from '../constants/todo'

export const add_todo = (text) => {
    return {
      type: ADD_TODO_ITEM,
      payload: text
    }
  }
