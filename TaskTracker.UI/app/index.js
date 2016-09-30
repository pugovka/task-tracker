import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import TaskTracker from './components/TaskTracker';

const SERVER_URL = 'http://localhost:14726/api/tasks';

const tasks = [
    {
        title: 'Set tasks to db',
        description: 'Delete hardcoded tasks, add post event handler'
    },
    {
        title: 'Add app interaction',
        description: 'Create form for task post'
    },
    {
        title: 'Add tasks edit option'
    },
    {
        title: 'Set styles'
    }
];


function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);

    } else {
        xhr = null;
    }
    return xhr;
}

var xhr = createCORSRequest('GET', SERVER_URL);
if (!xhr) {
    throw new Error('CORS not supported');
}

xhr.onload = function() {
    var responseText = xhr.responseText;
    console.log(responseText);
};

xhr.onerror = function() {
    console.log('There was an error!');
};
xhr.withCredentials = '';
xhr.send();


const store = configureStore();
store.dispatch(actions.setTasks(tasks));

ReactDOM.render(
  <Provider store={store}>
    <TaskTracker />
  </Provider>,
document.getElementById('app')
);
