import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
  state = {
    name: '',
    email:'',
    phone:'',
    message:'',
  }

  handleChange = event => {
    this.setState({ 
      name: event.target.value,
      email: event.target.value,
      phone: event.target.value,
      message: event.target.value 
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      phone:this.state.phone,
      message:this.state.message
    };

    axios.post(`http://127.0.0.1:8000/api/clientes/`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
           */}



<div class="form-floating mb-3">
            
            <input type="text" 
            class="form-control" 
            id="floatingInput" 
            placeholder="Name"
            name="name"
            onChange={this.handleChange}></input>
            <label for="floatingInput">Name</label>
  
          </div>
  
          <div class="form-floating mb-3">
              
            <input type="email" 
            class="form-control" 
            id="floatingInput" 
            placeholder="Email"
            name="email"
            onChange={this.handleChange}></input>
            <label for="floatingInput">Email</label>
  
          </div>
  
          <div class="form-floating mb-3">
              
            <input type="text" 
            class="form-control" 
            id="floatingInput" 
            placeholder="Phone"
            name="phone" 
            onChange={this.handleChange}></input>
            <label for="floatingInput">Phone</label>
  
          </div>
  
          <div class="form-floating mb-3">
            
            <textarea class="form-control" 
            placeholder="Leave a comment here" 
            id="floatingTextarea2"
            name="message"
            onChange={this.handleChange}>
            </textarea>
            <label for="floatingTextarea2">Message</label>
          </div>
      
          <button class="botones" type="submit">
            Send
          </button>
        </form>
      </div>
    )
  }
}