import React,{Component} from 'react';
import './App.css'

class Box extends Component {
  render(){
    return(
      <div style={{border: '1px solid #CD5C5C', margin:15}}>
        { children}
      </div>
    )
  }
}
class Article extends Component {
  render(){
    return(
      <section>
        <h2>{ title}</h2>
          <p><em>código{ codigo}</em></p>
          <Box>{ date}</Box>
          <article>
            { children}
          </article>
      </section>
    )
  }
}
class App extends Component {
  render() {
    return (
    <div className="App">
      <h4>Exercise Children props.</h4>
      <Article
        codigo='1234567'
        date={new Date().toLocaleDateString()}
        title='Cámara de Fotos'
        >
          <p>Pixeles efectivos (megapixeles)</p>
          <strong>Película. Full HD 1,920x1,080 / 30 cps</strong>
          
        </Article>
        <Article
        codigo='1234567'
        date={new Date().toLocaleDateString()}
        title='Mi 9T'
        >
          <p>CPU Qualcomm® Kryo™ 470 </p>
          <strong>Hasta 610 MHz</strong>
          
        </Article>
        
    </div>
  
  );
}
}

export default App;
