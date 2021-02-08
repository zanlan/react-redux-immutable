import { render } from 'react-dom';
import NewCon from './demoCon';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
const reducers = combineReducers({
    count(state = 2000, action) {
        switch (action.type) {
            case 'countAdd':
                return (state += action.num);
            default:
                return state;
        }
    },
});
const store = createStore(reducers);
class ReactRedux extends Component {
    render() {
        return (
            <div>
                <NewCon {...store.getState()} />
            </div>
        );
    }
}
const hotRender = () => {
    render(
        <Provider store={store}>
            <ReactRedux />
        </Provider>,
        document.getElementById('root')
    );
};

hotRender();
