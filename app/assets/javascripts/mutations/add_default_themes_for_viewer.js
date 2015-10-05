export default class extends Relay.Mutation {


  getMutation() {
    return Relay.QL`mutation { addDefaultThemesToViewer }`
  }


  getVariables() {
    return { themes_ids: this.props.themes_ids }
  }


  getFatQuery() {
    return Relay.QL`
      fragment on AddDefaultThemesToViewerPayload {
        themes
      }
    `
  }


  getConfigs() {
    return []
  }


}
