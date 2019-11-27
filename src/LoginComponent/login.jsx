import React from 'react'
import './login.scss'

export class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">User Login</div>
        <div className="content">
          <div className="form">
            <div className="formgroup">
              <label className="label">UserName:</label>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Enter the username"
                maxLength={15}
              />
            </div>
            <div className="formgroup">
              <label className="label">Password:</label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter the password"
                maxLength={20}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    )
  }
}
