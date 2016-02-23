var React = require('react');
var Bootstrap = require('react-bootstrap');
var Jumbotron = Bootstrap.Jumbotron;
var Page2 = React.createClass({
   render: function(){

     return (
         <Jumbotron fluid="false" bsStyle="info">
           <h1>Publish Page</h1>
           <p>Publish Something</p>
         </Jumbotron>
    )

  }
});

module.exports = Page2
