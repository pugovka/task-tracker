import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './presenter';

function mapStateToProps(state) {
  const tasks = state.task;
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TaskForm);
