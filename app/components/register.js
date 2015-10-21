import React from 'react';
import Reflux from 'reflux';
import RegStore from '../stores/register';
import RegAction from '../actions/register';

var Register = React.createClass({
  mixins: [Reflux.listenTo(RegStore, 'onRegister')],
  onRegister: function (data) {
    console.log('---component');
    console.log(data);
  },
  handleSub: function (e) {
    e.preventDefault();
    RegAction.register({
      loginname : '18883283605',
      password : '1234567',
      //autologin : this.state.rememberMe, //记住我的登录需要加上
      autoexpires : 10000});
  },
  render: function () {
    return (
      <div>
        <form>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input type="submit" value="提交" onClick={this.handleSub}/>
        </form>
      </div>
    );
  }
});
module.exports = Register;