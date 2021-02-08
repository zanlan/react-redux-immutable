import './index.scss';
import Head from '~/components/Head';
import { WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile';
export const mobileReg = /^1(3|5|7|8|9)\d{9}$/;
export const codeReg = /^\d{4}$/;
let timer = null;
export const num = 60;
import { axios } from '&';
import { history } from '&/history';
export default class Mine extends Component {
    constructor() {
        super();
        this.state = {
            phoneFlag: false,
            loginFlag: false,
            txt: '获取验证码',
            num,
            toggle: true,
        };
    }
    setMobile = val => {
        const code = this.code.state.value;
        this.setState({
            phoneFlag: mobileReg.test(val),
            loginFlag: mobileReg.test(val) && codeReg.test(code),
        });
    };
    setCode = val => {
        this.setState({
            loginFlag: mobileReg.test(this.mobile.state.value) && codeReg.test(val),
        });
    };
    receiveCode = () => {
        timer = setInterval(() => {
            if (this.state.num > 0) {
                this.state.num--;
                this.setState({
                    num: this.state.num,
                    txt: '还剩 ' + this.state.num + ' S',
                    phoneFlag: false,
                    toggle: false,
                });
            } else {
                this.setState({
                    num,
                    txt: '获取验证码',
                    phoneFlag: true,
                    toggle: true,
                });
                clearInterval(timer);
            }
        }, 1000);
        axios
            .post('/api/sendCode', {
                mobile: this.mobile.state.value
            })
            .then(res => {
                console.log(res);
            });
    };
    gotoLogin = () => {
        axios
            .post('/react/checkCode', {
                mobile: this.mobile.state.value,
                code: this.code.state.value,
            })
            .then(res => {
                if (!!res.data.type) {
                    history.push('/index/mine');
                    sessionStorage.token = res.data.token;
                } else {
                    sessionStorage.token = '';
                }
            });
    };
    render() {
        const { phoneFlag, loginFlag, txt, toggle } = this.state;
        return (
            <div className="indexview">
                <Head title="登录、注册" show={true} login={true}></Head>
                <WingBlank>
                    <WhiteSpace />
                    <List>
                        <WhiteSpace />
                        <InputItem
                            type="tel"
                            placeholder="请输入手机号码"
                            value='1827165263'
                            clear
                            ref={el => (this.mobile = el)}
                            onChange={this.setMobile}
                            disabled={!toggle}
                        >
                            手机号码
                        </InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="number"
                            placeholder="请输入验证码"
                            clear
                            ref={el => (this.code = el)}
                            onChange={this.setCode}
                        >
                            验证码
                        </InputItem>
                        <Button
                            onClick={this.receiveCode}
                            disabled={!phoneFlag}
                            className="l-btn"
                            inline
                            size="large"
                            type="warning"
                        >
                            {txt}
                        </Button>
                        <WhiteSpace />
                    </List>
                    <Button onClick={this.gotoLogin} disabled={!loginFlag} type="primary">
                        登录
                    </Button>
                </WingBlank>
            </div>
        );
    }
}
