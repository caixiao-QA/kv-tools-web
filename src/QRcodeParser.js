import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import QRcodeAnalysis from './QRcodeAnalysis/QRcodeAnalysis';


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
        {this.state.status=="KV" && <QRcodeAnalysis status={this.state.status}/>}
        {this.state.status=="BTC" && <QRcodeAnalysis status={this.state.status}/>}
        {this.state.status=="ETH" && <QRcodeAnalysis status={this.state.status}/>}
        </div>
        )
    }
} 

export default QRcodeParse;