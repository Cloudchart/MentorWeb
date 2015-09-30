class LandingApp extends React.Component {

  render = () => {
    return (
      <section>
        <span>Landing App Component for </span>
        { this.props.viewer.name }
      </section>
    )
  }

}


export default Relay.createContainer(LandingApp, {

  fragments: {

    viewer: () => Relay.QL`
      fragment on User {
        name
      }
    `

  }

})
