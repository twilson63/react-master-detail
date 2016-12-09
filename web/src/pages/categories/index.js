const React = require('react')
const { Link } = require('react-router')
const data = require('../../data')()

const Categories = React.createClass({
  getInitialState() {
    return {
      categories: []
    }
  },
  componentDidMount() {
    data.list('categories')
      .then(categories => this.setState({categories}))
  },
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <Link to="/categories/new">New Category</Link>
        <ul>
          {this.state.categories.map(cat => <li>{cat.name}</li>)}
        </ul>
      </div>
    )
  }
})

module.exports = Categories
