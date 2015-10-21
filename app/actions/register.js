import React from 'react';
import Reflux from 'reflux';
import HttpFactory from '../http';

var Actions = Reflux.createActions({
  'register': { children: ["success", "failed"]}
});
Actions.register.listen(function (data) {
  var url = 'http://dev.api.aiyaopai.com/?api=User.Login'
  console.log('register is beginning!')
  HttpFactory.post(url, data, this.success, this.failed);
});

module.exports = Actions;