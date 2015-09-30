Array.prototype.forEach.call(document.querySelectorAll('[data-react-class]'), (element) => {
  let Component = require('./components/' + element.dataset.reactClass)
  ReactDOM.render(<Component />, element)
})

Array.prototype.forEach.call(document.querySelectorAll('[data-relay-class]'), (element) => {
  let Component = require('./components/' + element.dataset.relayClass)
  let Route     = require('./routes/' + element.dataset.relayRoute)
  ReactDOM.render(<Relay.RootContainer Component={ Component } route={ new Route() } />, element)
})
