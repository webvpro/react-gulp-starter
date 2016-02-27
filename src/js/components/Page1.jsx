var React = require('react');
var Bootstrap = require('react-bootstrap');
var Jumbotron = Bootstrap.Jumbotron;
var Page1 = React.createClass({

  render: function(){

    return (
      <Jumbotron fluid="false">
        <h1>Play Page</h1>
        <p>Play Something</p>
      </Jumbotron>
   )
 }
});

module.exports = Page1
