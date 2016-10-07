const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter
const MttNavigation = require('./MttNavigation')

const Layout = props => (
    <div className='mttLayout'>
      <div>{props.children}</div>
      <MttNavigation/>
    </div>
)

module.exports = Layout
