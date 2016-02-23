var React = require('react');
var Bootstrap = require('react-bootstrap');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var NavDropdown = Bootstrap.NavDropdown;
var MenuItem = Bootstrap.MenuItem;

var NavigationManager = React.createClass({
  getInitialState: function(){
    return {items:[]};
  },
  render : function(){
    var navStyle ={
      button: {marginTop:6}
    };
    var Brand = <Link className="navbar-brand" to="/home">{this.props.brand}</Link>;
    return (

      <Navbar className="navbar-fixed-top" fluid id="{this.props.id}" brand={Brand}>
        <Nav className="nav pull-right">
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown" className="pull-right">
            <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
});
module.exports = NavigationManager
