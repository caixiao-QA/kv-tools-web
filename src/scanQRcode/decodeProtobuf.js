import { load, loadSync } from "protobufjs"; 
import proto from "../protocol/base.proto";
// import proto from "../protocol/base.proto";


export function DecodeProtobuf(buffer){
  console.log()
  load("./src/protocol/protocol/base.proto", function(err, root) {
    if (err)
      throw err;

    const Message = root.lookupType("../protocol/base.proto");
    let decoded = Message.decode(buffer);
    console.log(`decoded = ${JSON.stringify(decoded)}`);
  });
}

