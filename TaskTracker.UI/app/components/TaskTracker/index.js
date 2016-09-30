import React from 'react';
import { connect } from 'react-redux';
import TaskTracker from './presenter';

function mapStateToProps(state) {
  const tasks = state.task;
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TaskTracker);
