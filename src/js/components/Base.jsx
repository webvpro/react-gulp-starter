var React = require('react');

var Navigation = require('./NavigationManager.jsx');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid

var Base = React.createClass({
  render: function(){
    return(
      <Grid fuild>
        <Navigation brand="FatePtz" />
        <Grid>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
});

module.exports = Base;
