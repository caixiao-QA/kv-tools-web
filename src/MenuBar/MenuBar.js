import React from 'react';
import './MenuBar.css'
import keystoneIcon from './keystone-icon.png'

class MenuBar extends React.Component{
    constructor(props){
        super(props)

    }
  
    changeModule=(status)=>{
      this.props.setStatus(status)
    }
    
    render(){
        return (
            <ul>
              <li> 
                <div className="menu-title">
                <p>
                  <img src={keystoneIcon} className="kv-icon"></img>
                </p>
                <hr/>
                </div> 
              </li>
              <li>
                <a className={this.props.status=="KV"?"active":null} onClick={this.changeModule.bind(this,"KV")}>
                Keystone App Module
                </a>
              </li>
              <li>
                <a className={this.props.status=="BTC"?"active":null} onClick={this.changeModule.bind(this,"BTC")}>
                BTC Module
                </a>
              </li>
              <li>
                <a className={this.props.status=="ETH"?"active":null} onClick={this.changeModule.bind(this,"ETH")}>
                ETH Module
                </a>
                
              </li>
            </ul>
          );
    }

}


export default MenuBar;



// <Paper style={{ width: "15%"}}>
// <MenuList>
//   <MenuItem>
//     {/* <ListItemIcon>
//       <SendIcon fontSize="small" />
//     </ListItemIcon> */}
//     <Typography variant="inherit">Keystone Module</Typography>
//   </MenuItem>
//   <MenuItem>
//     {/* <ListItemIcon>
//       <PriorityHighIcon fontSize="small" />
//     </ListItemIcon> */}
//     <Typography variant="inherit">BTC Module</Typography>
//   </MenuItem>
//   <MenuItem>
//     {/* <ListItemIcon>
//       <DraftsIcon fontSize="small" />
//     </ListItemIcon> */}
//     <Typography variant="inherit" noWrap>
//       ETH Medule
//     </Typography>
//   </MenuItem>
// </MenuList>
// </Paper>