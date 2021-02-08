

import "./index.scss"

import {NavBar,Icon,Popover,ActionSheet} from "antd-mobile"
const Item = Popover.Item;

import {history} from "&/history";


export default class Head extends Component{
    goback=(show)=>{
        if(show){
            history.go(-1);
        }
    }

    gotoSearch=()=>{
        history.push("/search");
    }

    render(){
        const {
            show,
            search,
            login,
            scan
        }  = this.props;
        return (
            <NavBar
            mode="dark"
            icon={show&&<Icon type="left" />}
            onLeftClick={ ()=>this.goback(show) }
            rightContent={[
             !search&&<Icon key="0" onClick={this.gotoSearch} type="search" style={{ marginRight: '16px' }} />,
             <Pop key={1} login={login} scan={scan}/>     ,
            ]}
          > {this.props.title }</NavBar>
        )
    }
}

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Pop extends Component{
    constructor(){
        super();
        this.state = {
            visible:false
        }
    }
    handleVisibleChange=(visible)=>{
        this.setState({
            visible
        })
    }
    onSelect=(obj)=>{
        this.setState({
            visible:false
        });
        console.log(obj);
        const value = obj.props.value;
        if(value=="scan"){
            history.push("/scan");
        }else if (value=="login"){
            history.push("/login");
        }else {
            this.showActionSheet();
        }
    }

    showActionSheet = () => {
        const BUTTONS = ['拍摄', '从手机相册选择','删除',"取消"];
        ActionSheet.showActionSheetWithOptions({
          options: BUTTONS,
          cancelButtonIndex: BUTTONS.length - 1,
          destructiveButtonIndex: BUTTONS.length - 2,
          // title: 'title',
          message: 'wh1906',
          maskClosable: true,
          'data-seed': 'logId',
          wrapProps:{
            onTouchStart: e => e.preventDefault(),
          },
        },
        (buttonIndex) => {
            console.log(buttonIndex)
        });
    }

    render(){
        const {
            login,
            scan
        } = this.props;
        return (
            <Popover 
                mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                visible={this.state.visible}
                overlay={[
                (!scan&&<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                (<Item key="5" value="photo" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>拍照</Item>),
                (!login&&<Item key="6" value="login" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                    <span style={{ marginRight: 5 }}>登录</span>
                </Item>),
                ]}
                align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
            >
                <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
                }}
                >
                <Icon  type="ellipsis" />
                </div>
            </Popover>
        )
    }
}