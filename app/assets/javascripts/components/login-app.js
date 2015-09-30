export default class extends React.Component {

  render = () =>
    <section className="login-app">
      <ul>
        <li>
          <button onClick={ this.handleLoginButtonClick.bind(this, 'facebook') }>
            Login with Facebook
            <i className="fa fa-facebook" />
          </button>
        </li>
        <li>
          <button onClick={ this.handleLoginButtonClick.bind(this, 'twitter') }>
            Login with Twitter
            <i className="fa fa-twitter" />
          </button>
        </li>
      </ul>
    </section>

  handleLoginButtonClick = (provider, event) => {
    location = '/auth/' + provider
  }

}
