import React from 'react';
import QRcodeScanner from './QRcodeScanner';
import KVQRcodeDecode from './KVQRcodeDecode';
import PropagateLoader from 'react-spinners/PropagateLoader'
import { css } from "@emotion/react";
import './KVQRcodeAnalysis.css'
import cameraImg from './camera.png'


class KVQRcodeAnalysis extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            QRData:null,
            scanQRStatus:false,
            // 3 status：initial、updating、done
            decodeDataStatus:"initial"

        }
    }

    getQRcodeScannerData=(data)=>{
        this.setState({
            QRData:data,
            decodeDataStatus:'done',
            scanQRStatus:false
        })
    }

    setScanQRStatus=()=>{
        const decodeStatus = this.state.scanQRStatus ?'done':'updating'
        this.setState({ 
            decodeDataStatus:decodeStatus,
            scanQRStatus:!this.state.scanQRStatus,

        })
    }

    render(){
        console.log(this.state.decodeDataStatus)
        const override = css`
                            display: block;
                            margin: 50%;
                            `;
        return(
        <div>
            <div className="scanner">
                <div className="scanner-area">
                    {(!(this.state.scanQRStatus)) && <img src={cameraImg} className="scan-img" onClick={this.setScanQRStatus}/>}
                    {((this.state.scanQRStatus)) && <QRcodeScanner scanQRStatus={this.state.scanQRStatus} QRData={this.getQRcodeScannerData.bind(this)}/>}
                </div>
                <button onClick={this.setScanQRStatus} className="scan-button">{!this.state.scanQRStatus? "开始扫码":"停止扫码"}</button>
            </div>
            <div className="decoder">
            {this.state.decodeDataStatus=='initial' && <div className="decoder-initial">解析数据展示区域</div>}
            {this.state.decodeDataStatus=='updating' && <PropagateLoader  css={override} color={"#272639"} speedMultiplier={0.7} size={20} />}       
            {this.state.decodeDataStatus=='done' && <KVQRcodeDecode QRdata={this.state.QRData}/>}
            </div>
        </div>

    
      
        )
    }
}

export default KVQRcodeAnalysis;