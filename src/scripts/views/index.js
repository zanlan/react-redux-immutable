
import { HashRouter as Hash, Route, Switch, Redirect} from "react-router-dom";
import React from 'react';
import LazyLoad from "&/lazyload"
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';

 class Layout extends Component {
    render() {
        return (
            <div className="main" style={{height:'100vh'}}>
                <Switch>
                    <Route path="/" exact render={() => (<Redirect to="/guide" />)} />
                    <Route path="/guide" component={LazyLoad(() => import("./guide"))} />
                    <Route path="/index/" component={LazyLoad(() => import("./app"))} />
                    <Route path="/search" component={LazyLoad(() => import("./search"))} />
                    <Route path="/scan" component={LazyLoad(() => import("./scan"))} />
                    <Route path="/login" component={LazyLoad(() => import("./login"))} />
                    <Route render={() => (<Redirect to="/index/home" />)} />
                </Switch>
            </div>
        )
    }
}

class MainRoute extends React.Component {
    render() {
        return (
            <Hash
                basename="/"
            >
                <Route component={Layout} />
            </Hash>
        )
    }
}

function App() {
  return (
    <div className="app">
      <MainRoute/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
