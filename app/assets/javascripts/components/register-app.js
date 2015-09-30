import fetch from 'isomorphic-fetch'


export default class extends React.Component {


  state = {
    name:                   '',
    email:                  '',
    password:               '',
    password_confirmation:  '',
    errors:                 {},
    sync:                   false
  }


  // Renders
  //

  render = () =>
    <section className="register-app">
      { this.renderRegisterForm() }
    </section>


  renderRegisterForm = () =>
    <form onSubmit={ this.handleSubmit }>
      <dl>
        { this.renderNameInput() }
        { this.renderEmailInput() }
        { this.renderPasswordInput() }
        { this.renderPasswordConfirmationInput() }
      </dl>
      <section className="buttons">
        <button type="submit">Register</button>
      </section>
    </form>


  renderNameInput = () =>
    [
      <dt key="name-title">
        Name
      </dt>,
      <dd key="name-input">
        <input type="text" autoFocus={ true } value={ this.state.name } onChange={ this.handleInputChange.bind(this, 'name') } />
      </dd>
    ]


  renderEmailInput = () =>
    [
      <dt key="email-title">
        Email
      </dt>,
      <dd key="email-input">
        <input type="email" value={ this.state.email } onChange={ this.handleInputChange.bind(this, 'email') } />
      </dd>
    ]


  renderPasswordInput = () =>
    [
      <dt key="password-title">
        Password
      </dt>,
      <dd key="password-input">
        <input type="password" value={ this.state.password } onChange={ this.handleInputChange.bind(this, 'password') } />
      </dd>
    ]


  renderPasswordConfirmationInput = () =>
    [
      <dt key="password-confirmation-title">
        Password Confirmation
      </dt>,
      <dd key="password-confirmation-input">
        <input type="password" value={ this.state.password_confirmation } onChange={ this.handleInputChange.bind(this, 'password_confirmation') } />
      </dd>
    ]


  // Event handlers
  //

  handleSubmit = (event) => {
    event.preventDefault()
  }


  handleInputChange = (name, event) => {
    let state = {} ; state[name] = event.target.value
    this.setState(state)
  }


}
