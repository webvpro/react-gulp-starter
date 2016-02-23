var React = require('react');
var Bootstrap = require('react-bootstrap');
var Jumbotron = Bootstrap.Jumbotron;
var Page3 = React.createClass({
   render: function(){
     return (
       <Jumbotron fluid="false" bsStyle="info">
         <h1>Purchase Page</h1>
         <p>Purchase Something</p>
       </Jumbotron>
    )
  }
});

module.exports = Page3
