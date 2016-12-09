const React = require('react')
const {Link} = require('react-router')
const Home = () =>
  <div>
    <h1>Menu</h1>
    <ul>
      <li><Link to="/pets/1/show">Gretal</Link></li>
      <li><Link to="/procedures">Procedures</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </div>

module.exports = Home
