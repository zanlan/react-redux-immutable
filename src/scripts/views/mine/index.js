

import "./index.scss"
import Head  from "~/components/Head"

import UploadImg from "~/components/uploadImg";

import {axios} from "&";

import {WingBlank,Carousel,Button} from "antd-mobile"


import {history} from "&/history"

export default class Mine extends Component{
    constructor(){
        super();
        this.state = {
            banner:[],
            autoplay:true,
            isLogin:sessionStorage.token
        }
    }

    componentDidMount(){
        axios.get("/vue/movie",{params:{limit:6}}).then(res=>{
            this.setState({
                banner:res.data.result
            })
        })
    }

    todoLogin=()=>{
        history.push("/login")
    }

    render(){
        const {
            isLogin
        }  = this.state;
        return (
            <div className="indexview">
                <Head title="个人中心"></Head>
                <div style={{display:isLogin?"block":"none"}}>
                    <h2>Mine 个人中心 ....</h2>
                    <h2> token === {sessionStorage.token}</h2>
                    <UploadImg></UploadImg>
                </div>
                <div  style={{display:!isLogin?"block":"none"}}>
                    <h2>你还没有登录, 请马上登录 <Button onClick={this.todoLogin} inline type="primary"> 前往登陆 </Button></h2>
                </div>
                <WingBlank>
                    <Carousel
                         autoplay={this.state.autoplay}
                         infinite
                         autoplayInterval={1500}
                         beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                         afterChangtruncateSync
                    >
                        {
                            this.state.banner.map((b,i)=>{
                                return (
                                    <a
                                        key={i}
                                        href="#/index/home"
                                        style={{ display: 'inline-block', width: '100%', height: 300 }}
                                        >
                                        <img
                                            src={b.images.large}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top',height: 300  }}
                                            onLoad={() => {
                                            // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                            
                                            }}
                                        />
                                    </a>
                                )
                            })
                        }
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}