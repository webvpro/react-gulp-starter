var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Jumbotron = Bootstrap.Jumbotron;
var Col = Bootstrap.Col;
var Home = React.createClass({
  render: function(){
    return (
     <Row>
       <Jumbotron fluid="false">
         <h1>Hello, FatePtz!</h1>
         <p>This is a simple React Start Up With</p>
         <ul>
           <li>Gulp</li>
           <li>Babel</li>
           <li>SASS</li>
           <li>Bootstrap and Bootswatch</li>
         </ul>
         <Bootstrap.Button bsStyle="primary">Learn more</Bootstrap.Button>
       </Jumbotron>
     </Row>


   )
 }
});

module.exports = Home
