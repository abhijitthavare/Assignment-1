import React from "react";
import { Component } from "react";

class Nav extends Component
{
    render()
    {
        return(
          <div>
           {/* <h1>{this.props.data}</h1>
            <h1 style={{color:"red"}}>{this.props.data}</h1>
            <h1>{this.props.number}</h1>
            <h1 >{this.props.bollean}</h1>
            <h1>{this.props.data1}</h1> */}
            <h1>{this.props.data.us}</h1>
            <h1>{this.props.data.pass}</h1>

            </div>
        )
    }
}
export default Nav;
