export default class Home2 extends Component{
    constructor() {
        super();
        this.state = {
            www: 'home2',
        };
    }
    // 挂载
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return state;
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    // render(){}
    // UNSAFE_componentWillMount()

    // 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
    // static getDerivedStateFromProps() {}
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log('nextProps, nextState: ', nextProps, nextState);
        return true;
    }
    // render() {}
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('prevProps, prevState: ', prevProps, prevState);
        console.log('getSnapshotBeforeUpdate');
        return false
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    /*
    UNSAFE_componentWillUpdate()
    UNSAFE_componentWillReceiveProps()
    */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    //    当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

    static getDerivedStateFromError() {
        console.log('getDerivedStateFromError');
    }
    componentDidCatch() {
        console.log('componentDidCatch');
    }
    changestate() {
        this.setState({
            www: 'home2-home2',
        });
    }
    render() {
        console.log('render');
        let { www } = this.state;
        return (
            <div className="home2">
                {www}
                <button
                    onClick={() => {
                        this.changestate()
                    }}
                >
                    change
                </button>
            </div>
        );
    }
}