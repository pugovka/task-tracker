'use strict';
import React from 'react';
import * as actions from '../../actions';

// Set an empty task onload
let task = {};

function TaskForm(store) {
  return (
    <div>
      <form action="">
        <label>Task title:</label>
        <input type="text" ref={(ref) => task.title = ref} />
        <label>Task description:</label>
        <input type="text" ref={(ref) => task.description = ref} />
        <button type="button" onClick={() => { 
          store.dispatch(actions.addTask({title: task.title.value, description: task.description.value}));
          // Clear input fields
          task.title.value = '';
          task.description.value = '';
        }}>add</button>
      </form>
    </div>
  );
}

export default TaskForm;
