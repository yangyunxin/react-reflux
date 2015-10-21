import React from 'react';

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <header>header</header>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Layout;
