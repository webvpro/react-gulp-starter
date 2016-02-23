var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = require("history");
var UseRouterHistory = ReactRouter.useRouterHistory;
var CreateHashHistory = History.createHashHistory;
var IndexRoute = ReactRouter.IndexRoute;


var appHistory = UseRouterHistory(CreateHashHistory)({ queryKey: false });


var Base = require('./components/Base.jsx');
var Home = require('./components/Home.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
  <Router history={appHistory}>
    <Route path="/" component={Base}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home}></Route>
      <Route path="/page1" component={Page1}></Route>
      <Route path="/page2" component={Page2}></Route>
    </Route>
  </Router>
);

module.exports = Routes;
