import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

/**************************************************************/
// import { connect } from 'react-redux';
// @connect(
//     state => {
//         return {
//             ...state,
//             num: state.count + 9000000,
//         };
//     },
//     dispatch => {
//         return {
//             add: n => dispatch(countAdd(n)),
//         };
//     }
// )
/**************************************************************/
const countAdd = num => {
    return {
        type: 'countAdd',
        num,
    };
};
export default class ReactReduxDemo extends Component {
    render() {
        const { count, add,num } = this.props;
        console.log(' this.props: ',  this.props);
        return (
            <div>
                <h2>{count}--{num} </h2>
                <Button inline type="primary" onClick={() => add(50)}>
                    add
                </Button>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         ...state,
//         num: state.count + 1000,
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         add: n => dispatch(countAdd(n)),
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxDemo);