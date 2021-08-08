import React from 'react';
import QrReader from 'react-qr-scanner';
import { URDecoder } from '@ngraveio/bc-ur';

class QRcodeScanner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 200,
      decoder: new URDecoder(),
      previewStyle : {
        height: 450,
        width: 450,
        objectFit:"cover"
      }
    }
  }

  handleScan=(data)=>{
    if(data){
      this.state.decoder.receivePart(data)
      if (this.state.decoder.isSuccess()) {
        // Get the UR representation of the message
        const ur = this.state.decoder.resultUR()
        // Decode the CBOR message to a Buffer
        const decoded = ur.decodeCBOR()
        console.log(decoded)
        this.props.QRData(decoded)
      }
    }
  }

  handleError(err){
    console.error(err)
  }

  render(){
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={this.state.previewStyle}
          />
      </div>
    )
  }
}

export default QRcodeScanner;