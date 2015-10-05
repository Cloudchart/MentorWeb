import Immutable from 'immutable'

import AddDefaultThemesMutation from '../mutations/add_default_themes_for_viewer'

class LandingApp extends React.Component {

  state = {
    sync:   false,
    themes: Immutable.Set()
  }

  render = () => {
    return (
      <section>
        <span>Landing App Component for </span>
        { this.props.viewer.name }
        <ul>
          { this.renderDefaultThemes() }
        </ul>
        { this.renderContinueButton() }
      </section>
    )
  }


  renderDefaultThemes = () => {
    return this.props.viewer.default_themes.map(theme => {
      return (
        <li key={ theme.id } style={ { textTransform: 'capitalize' } }>
          <a href="#" onClick={ this.handleThemeClick.bind(this, theme.id) }>
            { this.renderThemeStatus(theme.id) }
            { theme.name }
          </a>
        </li>
      )
    })
  }


  renderThemeStatus = (id) => {
    if (this.state.themes.has(id)) {
      return <i className="fa fa-check" />
    } else {
      return null
    }
  }


  renderContinueButton = (id) => {
    if (this.state.themes.size < 3) {
      return null
    } else {
      let spinner = null;
      if (this.state.sync) {
        spinner = <i className="fa fa-spin fa-spinner" />
      }
      return (
        <button onClick={ this.handleButtonClick } disabled={ this.state.sync }>
          Continue
          { spinner }
        </button>
      )
    }
  }


  handleThemeClick = (id, event) => {
    event.preventDefault()
    if (this.state.sync) { return }
    let themes = this.state.themes
    themes = themes.contains(id) ? themes.delete(id) : themes.add(id)
    this.setState({ themes: themes })
  }


  handleButtonClick = (event) => {
    event.preventDefault()
    if (this.state.sync) { return }
    this.setState({ sync: true })
    Relay.Store.update(new AddDefaultThemesMutation({ themes_ids: this.state.themes.toArray() }))
  }

}


export default Relay.createContainer(LandingApp, {

  fragments: {

    viewer: () => Relay.QL`
      fragment on User {
        id, name
        default_themes {
          id, name
        }
      }
    `

  }

})
