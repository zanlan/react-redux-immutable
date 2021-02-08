import immutable from 'immutable';
//import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
@connect(state => {
    return {
        count: state.getIn(['data', 'count']),
    };
})
class ImmutableDemo extends Component {
    change = () => {
        this.props.dispatch(countDesc(this.inp.value));       
    };
    render() {
        const count = this.props.count;
        return (
            <input type="text" value={count} ref={el => (this.inp = el)} onChange={this.change} />
        );
    }
}

function countDesc(payload) {
    return new Promise((resolve)=>{
        setTimeout(
            () => {resolve(1)},
            2000
        );
    }).then(res=>{
        return {
            type: 'countDesc',
            res
        }
    })
}
const reducers = combineReducers({
    data(
        state = immutable.Map({
            count: 100000000,
        }),
        action
    ) {
        switch (action.type) {
            case 'countDesc':
                return state.update('count', v => v - action.payload);
            default:
                return state;
        }
    },
});

const store = createStore(reducers);
class ReactRedux extends Component {
    render() {
        return (
            <div className="root-child">
                <ImmutableDemo></ImmutableDemo>
            </div>
        );
    }
}

render(
    <Provider store={store}>
        <ReactRedux />
    </Provider>,
    document.getElementById('root')
);
