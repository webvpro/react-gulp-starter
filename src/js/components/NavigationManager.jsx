var React = require('react');
var Bootstrap = require('react-bootstrap');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;

var NavigationManager = React.createClass({
  getInitialState: function(){
    return {items:[]};
  },
  render : function(){
    var navStyle ={
      button: {marginTop:6}
    };
    return (

      <Navbar className="navbar-fixed-top" fluid id="{this.props.id}">
        <Link className="navbar-brand" to="/home">{this.props.brand}</Link>
        <Nav className="nav pull-right">
          <DropdownButton style={navStyle.button} className="btn-info" eventKey={3} title="Dropdown" pullRight id="navdropdown">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </Nav>
      </Navbar>
    );
  }
});
module.exports = NavigationManager
