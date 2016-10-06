'use strict';

import React from 'react';

function TaskTracker({ tasks = [] }) {
  return (
    <div>
    {
      tasks.map((task, key) => {
        return(
          <div className="task" key={key}>
            <div className="task__title">{task.Title}</div>
            <div className="task__description">{task.Description}</div>
          </div>
        );
      })
    }
    </div>
  );
}

export default TaskTracker;
