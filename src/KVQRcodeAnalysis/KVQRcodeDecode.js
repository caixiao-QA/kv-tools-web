import React from 'react';
import protoc from './proto'
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
        const data = Base.decode(buffer).data
        return data
    }

    render(){
        const decodeStyle = {
                margin:20,
                fontSize:15
        }
        return(
            <div style={decodeStyle}>
            {/* <ReactJson src={this.decodeProtobuffToJson(this.props.QRdata)} /> */}
            <JSONPretty data={this.decodeProtobuffToJson(this.props.QRdata)}></JSONPretty>
            </div>
        )
    }
}

export default KVQRcodeDecode;