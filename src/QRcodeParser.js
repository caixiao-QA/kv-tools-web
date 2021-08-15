import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import KVQRcodeAnalysis from './KVQRcodeAnalysis/KVQRcodeAnalysis';
import { Divider } from 'material-ui';


class QRcodeParse extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // KV BTC ETH 
            status:'KV'
        }
    }

    setStatus=(status)=>{
        this.setState ({
            status:status
        })
    }

    render(){
        return(
        <div>
        <MenuBar status={this.state.status} setStatus={this.setStatus.bind(this)}/>
        {this.state.status=='KV' && <KVQRcodeAnalysis/>}
        {this.state.status=="BTC"}
        </div>
        )
    }
} 

export default QRcodeParse;