import './index.scss';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import { history } from '&/history';

const foots = [
    { txt: '首页', path: '/index/home', name: 'home', icon: 'icon-tongqian' },
    { txt: '分类', path: '/index/classify', name: 'classify', icon: 'icon-denglong' },
    { txt: '购物车', path: '/index/cart', name: 'cart', icon: 'icon-yuanbao' },
    { txt: '我', path: '/index/mine', name: 'mine', icon: 'icon-lipao' },
];

export default class AFoot extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'home',
        };
    }
    componentDidMount() {
        var hash = location.hash;
        var tab = hash.replace('#/index/', '');
        this.setState({
            selectedTab: tab,
        });
    }

    render() {
        return (
            <div className="myfoot">
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
                    {foots.map((foot, i) => {
                        return (
                            <TabBar.Item
                                title={foot.txt}
                                key={i}
                                icon={
                                    <i
                                        style={{ width: '22px', height: '22px' }}
                                        className={'iconfont ' + foot.icon}
                                    />
                                }
                                selectedIcon={
                                    <i
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                        }}
                                        className={'iconfont ' + foot.icon}
                                    />
                                }
                                selected={this.state.selectedTab === foot.name}
                                badge={(i == 2 && 99) || (i == 3 && 100)}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: foot.name,
                                    });
                                    history.push(foot.path);
                                }}
                                data-seed="logId"
                            ></TabBar.Item>
                        );
                    })}
                </TabBar>
            </div>
        );
    }
}

AFoot.propTypes = {
    history: PropTypes.oneOfType([
        // PropTypes.array.isRequired,
        PropTypes.bool,
        PropTypes.func,
        PropTypes.number,
        PropTypes.object,
        PropTypes.string,
        PropTypes.symbol,
    ]),
    history2: PropTypes.oneOf(["sring1"]),
};
