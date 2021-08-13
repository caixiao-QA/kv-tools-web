import React from 'react';
import protoc from './base'
import zlib from 'zlib';
// import ReactJson from 'react-json-view'
import JSONPretty from 'react-json-pretty';



class KVQRcodeDecode extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state={
    //         finalData:{}
    //     }
    // }

    decodeProtobuffToJson = (bufferData) => {
        const Base = protoc.protoc.Base;
        const buffer = zlib.gunzipSync(bufferData);
        const data = Base.decode(buffer)
        return data
    }

    render(){
        const decodeStyle = {
                margin:20,
                fontSize:15,
        }
        return(
            <div style={decodeStyle}>
            <JSONPretty data={this.decodeProtobuffToJson(this.props.QRdata)}></JSONPretty>
            </div>
        )
    }
}

export default KVQRcodeDecode;