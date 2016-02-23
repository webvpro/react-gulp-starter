var React = require('react');

var Navigation = require('./NavigationManager.jsx');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid

var Base = React.createClass({
  render: function(){
    return(
     <div className="container-fluid">
       <Navigation brand="FatePtz" />
       {this.props.children}
     </div>
    )
  }
});

module.exports = Base;
