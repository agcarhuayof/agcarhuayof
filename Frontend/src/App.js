import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Component } from 'react';
// import './App.css';

class App extends Component {

  render()
  {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer> 
      </div>
  
      
    );    
  }
  
}

export default App;
