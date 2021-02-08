import "./index.scss";

import Head  from "~/components/Head"
import {WingBlank, SearchBar  } from "antd-mobile"
export default class Search extends Component{
    todoSearch=()=>{

        const keyword = this.searchDom.state.value;
        console.log(keyword);

        
    }
    render(){
        return (
            <div>
                <Head title="搜索" show={true}  search={true}  ></Head>
                <SearchBar onSubmit={this.todoSearch} placeholder="Search" maxLength={8} ref={el=>this.searchDom=el} />
            </div>
        )
    }
}