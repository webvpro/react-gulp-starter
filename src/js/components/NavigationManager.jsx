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
        <Navbar.Collapse>
          <Nav className="nav pull-left">
            <NavItem eventKey={1} href="#/page1">Play</NavItem>
            <NavItem eventKey={2} href="#/page2">Publish</NavItem>
            <NavItem eventKey={2} href="#/page3">Purchase</NavItem>
          </Nav>
          <Nav className="nav pull-right">
            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown" className="pull-right">
              <MenuItem eventKey={3.1}><i className="fa fa-play-circle-o"></i>Sessions</MenuItem>
              <MenuItem eventKey={3.2}><i className="fa fa-leanpub"></i>Publications</MenuItem>
              <MenuItem eventKey={3.3}><i className="fa fa-heartbeat"></i>Watching</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}><i className="fa fa-user"></i>Profile</MenuItem>
              <MenuItem eventKey={3.3}><i className="fa fa-gears"></i>Settings</MenuItem>
              <MenuItem eventKey={3.3}><i className="fa fa-power-off"></i>Signout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});
module.exports = NavigationManager
