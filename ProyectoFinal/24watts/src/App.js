import Header from './components/Header';
import Main from './components/Main';
import Formulario from './components/Formulario';
import Form from './components/Form';
import Mailer2 from './components/Mailer2';
import Footer from './components/Footer';
import { Component } from 'react';

//import './css/App.css';

class App extends Component {
 
  
  render()
  {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        {/* <Formulario></Formulario> */}
        {/* <Form></Form>  */}
        <Mailer2></Mailer2>
        <Footer></Footer>
      </div>
  
      
    );    
  }
  
}

export default App;
