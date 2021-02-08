


import "./index.scss";
import {axios} from "&"

export default class UploadImg extends Component{

    constructor(){
        super();
        this.state = {
            pic:""
        }
    }

    componentDidMount(){
        axios.post("/react/getAvatar").then(res=>{
            if(!!res.data.type){
                this.setState({
                    pic:res.data.result.pic.replace(/public/,"http://localhost:1906/")
                });
            }else{
                this.setState({
                    pic:require("@/assets/images/photo.png")
                })
            }
        })
    }

    handleClick=()=>{
        this.inp.click();
    }

    upload=()=>{
        console.log("马上上传图片....");
        const file = this.inp.files[0];
        const data = new FormData();
        data.append("avatar",file);
        axios({
            url:"/react/uploadreact",
            method:"POST",
            data:data,
            contentType:false,
            processData:false,
        }).then(res=>{
            if(res.data.code==200){
                this.setState({
                    pic:res.data.pic.replace(/public/,"http://localhost:1906/")
                });
            }
        });
    }

    render(){
        return (
            <div>
                <img src={this.state.pic} alt="" onClick={this.handleClick} className="touxiang"/>
                <input ref={el=>this.inp=el} style={{display:'none'}} onChange={this.upload} type="file"/>
            </div>
        )
    }
}