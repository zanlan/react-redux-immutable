



import "./index.scss"
import Head  from "~/components/Head"

export default class Mine extends Component{
    render(){
        return (
            <div className="indexview">
                <Head title="扫一扫" show={true} scan={true} ></Head>
                <h2> 马上开始扫一扫 </h2>
            </div>
        )
    }
}