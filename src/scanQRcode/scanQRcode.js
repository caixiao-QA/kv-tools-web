import React from 'react';
import QrReader from 'react-qr-scanner';
import { URDecoder } from '@ngraveio/bc-ur'
// import { DecodeProtobuf } from './decodeProtobuf'
import {DecodeProtobuf} from './decodeProtobuf'

class ScanQRcode extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 200,
      decoder: new URDecoder()

    }

    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
    if(data){
      this.state.decoder.receivePart(data)

      if (this.state.decoder.isSuccess()) {
        // Get the UR representation of the message
        const ur = this.state.decoder.resultUR()

        // Decode the CBOR message to a Buffer
        const decoded = ur.decodeCBOR()
        console.log(decoded)

        DecodeProtobuf()
        
        // get the original message, assuming it was a JSON object
        // const originalMessage = JSON.parse(decoded.toString())
      }
      }
   
  }

  handleError(err){
    console.error(err)
  }
  render(){
    console.log(this.state.result)
    const previewStyle = {
      height: 300,
      width: 300,
      objectFit:"cover"
    }
    
    const decoder = new URDecoder()

    
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={previewStyle}
          />
      </div>
    )
  }
}

export default ScanQRcode;