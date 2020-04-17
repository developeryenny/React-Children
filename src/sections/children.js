import React,{Component} from 'react';
import './App.css'

class Box extends Component {
  render(){
    return(
      <div style={{border: '1px solid #CD5C5C', margin:5}}>
        { children}
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
    <div className="App">
      <h4>Children props</h4>
      <Box>Hola! Soy un hijo!</Box>
      <Box>Segundo hijo!!</Box>
    </div>
  
  );
}
}

export default App;
