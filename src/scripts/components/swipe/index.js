// 封装组件

import './index.scss';
import PropTypes from 'prop-types';

export class MySwiper extends Component {
    render() {
        const { id, children } = this.props;
        return (
            <div className="swiper-container" id={id}>
                <div className="swiper-wrapper">{children}</div>
            </div>
        );
    }
    componentDidMount() {
        const { id, swiperOptions, children } = this.props;
        if (children.length > 0) {
            new Swiper('#' + id, swiperOptions);
        }
    }
}

// 静态属性
MySwiper.Zhangliang = props => {
    return <div className="swiper-slide">{props.children}</div>;
};

MySwiper.propTypes = {
    id: PropTypes.string.isRequired,
    swiperOptions: PropTypes.object.isRequired,
};
