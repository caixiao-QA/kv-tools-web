import React from 'react';
import protoc from './base'
import zlib from 'zlib';
// import ReactJson from 'react-json-view'
import JSONPretty from 'react-json-pretty';
import KVQRcodeDecode from '../KVQRcodeAnalysis/KVQRcodeDecode';


class QRcodeDecode extends React.Component{

    render(){
        return(
        <div>
        {this.props.status=="KV" && <KVQRcodeDecode KVQRdata={this.props.QRData}/>}
        </div>
        )
    }
}

export default QRcodeDecode;