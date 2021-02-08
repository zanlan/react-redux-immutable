import './index.scss';
import { MySwiper } from '~/components/swipe';
const SwiperItem = MySwiper.Zhangliang;
export default class Guide extends Component {
    constructor() {
        super();
        this.state = {
            imgs: [
                require('@/assets/images/img1.jpg'),
                require('@/assets/images/img2.jpg'),
                require('@/assets/images/img3.jpg'),
                require('@/assets/images/img4.jpg')
            ],
        };
    }
    gotoApp = id => {
        if (id == this.state.imgs.length - 1) {
            const { history } = this.props;
            history.push('/index/home');
        }
    };

    render() {
        const { imgs } = this.state;
        return (
            <div className="guide">
                <MySwiper id="my-guide" swiperOptions={{ loop: false, speed: 1800 }}>
                    {imgs.map((m, i) => {
                        return (
                            <SwiperItem key={i}>
                                <img
                                    onClick={() => this.gotoApp(i)}
                                    src={m}
                                    className="g-img"
                                    alt=""
                                />
                                {i == imgs.length - 1 && (
                                    <button
                                        onClick={() => this.props.history.push('/index/home')}
                                        className="entry-btn"
                                    >
                                        点击进入
                                    </button>
                                )}
                            </SwiperItem>
                        );
                    })}
                </MySwiper>
            </div>
        );
    }
}
