const React = require('react')
const { pathOr } = require('ramda')

const Category = React.createClass({
  componentDidMount() {
    data.get(this.props.params.id)
      .then(category => this.setState({category}))
  },
  render() {
    return (
      <div>
        <h1>Category</h1>
        <h3>{pathOr('Not Specified', ['state', 'category'], this)}</h3>
      </div>
    )
  }
})

module.exports = Category
