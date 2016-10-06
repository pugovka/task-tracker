'use strict';

export function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

export function httpRequest(method, url, data = {}) {
  return new Promise(function(resolve, reject) {
    const xhr = createCORSRequest(method, url);
    
    if (!xhr) {
      reject(new Error('CORS not supported'));
    }

    xhr.onerror = () => {
      reject(new Error('Error in request'));
    };

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else if (this.status == 201) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.withCredentials = '';

    if (method === 'GET') {
      xhr.send();
    } else if (method === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    } else {
      reject(new Error('Method is not supported'));
    }

  });
}
