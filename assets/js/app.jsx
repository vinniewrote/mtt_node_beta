const React = require('react')
const ReactDOM = require('react-dom')
const MttNavigation = require('./MttNavigation')

var NavComponent = () => (
  <nav>
    <MttNavigation title='Discover' />
    <MttNavigation title='Parks' />
    <MttNavigation title='Journal' />
    <MttNavigation title='Profile' />
  </nav>
)

ReactDOM.render(<NavComponent/>, document.getElementById('appContainer'))
