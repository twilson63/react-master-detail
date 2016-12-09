const React = require('react')
const { Link } = require('react-router')
const data = require('../../data')()
const {filter, propEq} = require('ramda')

const Categories = React.createClass({
  getInitialState() {
    return {
      categories: [],
      filtered: []
    }
  },
  componentDidMount() {
    data.list('categories')
      .then(categories => this.setState({
        filtered: categories,
        categories
      }))
  },
  filter(e) {
    this.setState({ filtered:
      filter(
        category => category.name.indexOf(e.target.value) === 0,
        this.state.categories
      )
    })
  },
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <Link to="/categories/new">New Category</Link>
        <br />
        <input
          onChange={this.filter}
          placeholder="search" type="text"
         />
        <ul>
          {this.state.filtered.map(cat => <li>{cat.name}</li>)}
        </ul>
      </div>
    )
  }
})

module.exports = Categories
