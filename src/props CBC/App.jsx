import React from "react";
import { Component } from "react";
import Nav from './Nav';



class App extends Component
{
    render()
    {
        return(
            <div>
            <>
           {/* <Nav data="hello"/> */}
           {/* <Nav data="hello" number={12345}  bollean={true} data1={null}/> */}
           <Nav data={{us:"abhi", pass:12345
        }}/>
            
           </>
           </div>
           
        )
    }
}
export default App;


