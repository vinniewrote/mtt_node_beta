const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

const MttNavigation = props => (
    // <button>{props.title}</button>
    <nav>
      <Link to='/discover' className=''><button>Discover</button></Link>
      <Link to='/parks' className=''><button>Parks</button></Link>
      <Link to='/journal' className=''><button>Journal</button></Link>
      <Link to='/profile' className=''><button>Profile</button></Link>
    </nav>
)

module.exports = MttNavigation
