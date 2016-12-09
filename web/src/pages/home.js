const React = require('react')
const {Link} = require('react-router')
const Home = () =>
  <div>
    <h1>Menu</h1>
    <ul>
      <li><Link to="/pets/1/edit">Gretal</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </div>

module.exports = Home
