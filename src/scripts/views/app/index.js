import './index.scss';

import { Switch, Route, Redirect } from 'react-router-dom';

import LazyLoad from '&/lazyload';

const AFoot = LazyLoad(() => import('~/components/AFoot'));

/*
import { NavLink } from 'react-router-dom';
<NavLink to={foot.path} activeClassName="nav-active"></NavLink>
*/

export default class Index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index/home" component={LazyLoad(() => import('../home'))} />
                    <Route
                        path="/index/classify"
                        component={LazyLoad(() => import('../classify'))}
                    />
                    <Route path="/index/cart" component={LazyLoad(() => import('../cart'))} />
                    <Route path="/index/mine" component={LazyLoad(() => import('../mine'))} />
                    <Route render={() => <Redirect to="/index/home" />} />
                </Switch>
                <AFoot  history= {this.props.history}  />
            </div>
        );
    }
}
