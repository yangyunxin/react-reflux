import React from 'react';
import Reflux from 'reflux';
import RegAction from '../actions/register';

var UserStore = Reflux.createStore({
  init: function () {
    this.data = {

    };
    this.listenTo(RegAction.register.success, this.onRegisterSuccess);
    this.listenTo(RegAction.register.failed, this.onRegisterFailed);
  },
  onRegisterSuccess: function (data) {
    console.log(data);
    this.data = data;
    this.trigger(this.data);
  },
  onRegisterFailed: function (data) {
    console.log(data);
    this.trigger(this.data);
  }
});

module.exports = UserStore;