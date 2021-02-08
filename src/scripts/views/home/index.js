import Home1 from './home1';
import Home2 from './home2';
import './index.scss';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            www: '1111',
        };
    }
    // 挂载
    static getDerivedStateFromProps(props, state) {
        return state;
    }
    componentDidMount() {
    }
    // render(){}
    // UNSAFE_componentWillMount()

    // 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
    // static getDerivedStateFromProps() {}
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    // render() {}
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return 'getSnapshotBeforeUpdate  to componentDidUpdate'
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('snapshot: ', snapshot);
    }
    /*
    UNSAFE_componentWillUpdate()
    UNSAFE_componentWillReceiveProps()
    */
    componentWillUnmount() {
    }
    //    当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

    static getDerivedStateFromError() {
    }
    componentDidCatch() {
    }
    changestate(e) {
        console.log('e: ', e);
        this.setState({
            www: '2222',
        });
    }
    render() {
        let { www } = this.state;
        return (
            <div className="indexview">
                {www}
                <button
                    onClick={(e) => {
                        this.changestate(e)
                    }}
                >
                    change
                </button>
                <Home1></Home1>
                <Home2 p='传给home2的参数'></Home2>
            </div>
        );
    }
}
