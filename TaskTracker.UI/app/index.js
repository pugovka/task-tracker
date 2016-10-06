'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import * as constants from './constants';
import TaskTracker from './components/TaskTracker';
import TaskForm from './components/TaskForm';
import { httpRequest } from './functions';

// Set initial state - get tasks from db and display them
httpRequest('GET', constants.SERVER_URL)
  .then(
    response => {
      const tasks = JSON.parse(response);

      const store = configureStore();
      store.dispatch(actions.setTasks(tasks));

      const TaskTrackerApp = () => (
      <div>
        <TaskTracker />
        <TaskForm />
      </div>
      );

      ReactDOM.render(
        <Provider store={store}>
          <TaskTrackerApp />
        </Provider>,
        document.getElementById('app')
      );
    },
    error => { console.log(error) }
  );
