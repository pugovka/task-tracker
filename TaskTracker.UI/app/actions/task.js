'use strict';

import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';
import { httpRequest } from '../functions';

export function setTasks(tasks) {
  return {
    type: actionTypes.TASKS_SET,
    tasks
  };
}

export function addTask(task) {
  httpRequest('POST', constants.SERVER_URL, task)
    .then(
      response => {
        console.log('Task added');
      },
      error => { 
        console.log(error);
      }
    );

  return {
    type: actionTypes.ADD_TASK,
    task
  }
}
