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

    return (

      <Navbar className="navbar-fixed-top" fluid id="{this.props.id}">
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/home">{this.props.brand}</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#/page1">Play</NavItem>
            <NavItem eventKey={2} href="#/page2">Publish</NavItem>
            <NavItem eventKey={2} href="#/page3">Purchase</NavItem>
          </Nav>

          <Nav className="navbar-right">
            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown" className="">
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
