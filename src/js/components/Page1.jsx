var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row
var Page1 = React.createClass({

  render: function(){
    var rowStyle = {marginTop:'6.33em', paddingLeft:'1em', paddingRight:'1em'};
    return (
     <Row style={rowStyle}>
       <h1>
       Kitty Page
       </h1>
     </Row>
   )
 }
});

module.exports = Page1
