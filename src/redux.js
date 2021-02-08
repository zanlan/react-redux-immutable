import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Button } from 'antd-mobile';
import axios from 'axios';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
const reducers = combineReducers({
    data(
        state = {
            word: '初始化数据'
        },
        action
    ) {
        switch (action.type) {
            case 'getTypesAsync':
                return { ...state, data: action.data };
            default:
                return state;
        }
    },
});

const store = createStore(reducers, applyMiddleware(thunk, promise));

async function getTypesAsync({ url }) {
    const res = await axios.get(url);
    return {
        type: 'getTypesAsync',
        data: res.data.result,
    };
}
class DemoView extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Button
                    onClick={() => {
                        store.dispatch(
                            getTypesAsync({
                                url: 'https://api.apiopen.top/getJoke?page=1&count=20&type=video',
                            })
                        );
                    }}
                    type="primary"
                    inline
                >
                    点击
                </Button>
            </div>
        );
    }
}

import { render } from 'react-dom';
export default class ReduxDemo extends Component {
    render() {
        return (
            <div>
                <DemoView {...store.getState()}></DemoView>
            </div>
        );
    }
}

const hotRender = () => {
    render(<ReduxDemo></ReduxDemo>, document.getElementById('root'));
};

hotRender();

store.subscribe(hotRender); // 订阅 state 每当state 改变 会重新 刷新 render
