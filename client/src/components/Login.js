import React from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    data:""
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/auth/login', this.state.credentials)
      .then(res => {
        console.log("stats");
        
        localStorage.setItem('token', JSON.stringify(res.data.token));
        this.props.history.push('/jokelist');
      })
      .catch(err => {
        console.log(err.response)
        this.state.data = err.response;
      });
  };

  render() {
    return (
      <div className="login-wrapper">
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
          {this.state.data.status==401?<p>Wrong credentials</p>:null}
        </form>
      </div>
    );
  }
}

export default Login;
