
import React, { Component } from 'react';
import background from "./Image/Fergusson.png";
  
class App extends Component {
  render() {
    const myStyle={
        backgroundImage:`url(${background})`,
        height:'100vh',
        marginTop:'-50px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <>
      <div style={myStyle}>
    
      </div>
      </>
    );
  }
}
   
export default App;