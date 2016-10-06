'use strict';

import * as actionTypes from '../constants/actionTypes';

const initialState = [];

const taskReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        Title: action.task.title,
        Description: action.task.description
      };
  }
  return state;
}

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.TASKS_SET:
      return setTasks(state, action);
    case actionTypes.ADD_TASK:
      return addTask(state, action);
  }
  return state;
}

function setTasks(state, action) {
  const { tasks } = action;
  return [ ...state, ...tasks ];
}

function addTask(state, action) {
  return [
    ...state,
    taskReducer(undefined, action)
  ]
}
