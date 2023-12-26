import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

import {
  AppContainer,
  UserNameAndPasswordCon,
  CustomInput,
  CustomCheckBox,
  CustomLabel,
  ShowPassword,
  CustomCheckBoxCon,
  CustomButton,
  FormContainer,
  SubmitError,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    showSubmitError: false,
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: prevState.showPassword,
    }))
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <CustomLabel htmlFor="username">USERNAME</CustomLabel>
        <CustomInput
          type="text"
          onChange={this.onChangeUsername}
          value={username}
          id="username"
          placeholder="Username"
          name="username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <CustomLabel htmlFor="password">USERNAME</CustomLabel>
        <CustomInput
          type={inputType}
          onChange={this.onChangePassword}
          value={password}
          name="password"
          id="password"
          placeholder="Password"
        />
        <CustomCheckBoxCon>
          <CustomCheckBox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CustomCheckBoxCon>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <AppContainer>
          <FormContainer onSubmit={this.onSubmitForm}>
            <userNameAndPasswordCon>
              {this.renderUsernameField()}
            </userNameAndPasswordCon>
            <UserNameAndPasswordCon>
              {this.renderPasswordField()}
            </UserNameAndPasswordCon>
            <CustomButton type="submit">Login</CustomButton>
            {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
          </FormContainer>
        </AppContainer>
      </>
    )
  }
}

export default LoginForm
