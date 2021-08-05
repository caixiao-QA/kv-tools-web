import React from 'react';
import {slide as Menu} from 'react-burger-menu'

class MenuBar extends React.Component{
    render(){
        return(
            <Menu right width={'20%'}>
                 <a id="home" className="menu-item" href="/">Home</a>
                 <a id="KVQRcode" className="kv-QRcode" href="/">decode KV QRcode</a>
            </Menu>
        )
    }

}

export default MenuBar

