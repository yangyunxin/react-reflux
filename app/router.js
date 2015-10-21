var React = require('react');
import { Router, Route, Link, IndexRoute }  from 'react-router';
import Layout from './components/layout.js';
import Register from './components/register'
var ReactDOM = require('react-dom');

var routes = (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={Register} />
      <Route path="register" component={Register}></Route>
    </Route>
  </Router>
);

exports.start = function () {
  ReactDOM.render(
    routes,
    document.getElementById('app')
  )
}