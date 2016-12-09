const React = require('react')
const {pathOr, set, lensProp, path } = require('ramda')
const {Redirect} = require('react-router')
const data = require('../../data')()

const CategoryForm = React.createClass({
  getInitialState() {
    return {
      category: {
        name: ''
      },
      resolved: false
    }
  },
  componentDidMount() {

  },
  handleSubmit(e) {
    e.preventDefault()
    data.post('categories', path(['state', 'category'], this))
      .then(res => this.setState({resolved: true}))

  },
  render() {
    return (  <div>
        <h1>New Category</h1>
        {pathOr(false, ['state','resolved'], this) ? <Redirect to="/categories" /> : null}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>name</label>
            <input
              value={pathOr('', ['state','category', 'name'], this)}
              onChange={e => this.setState({
                category: set(
                  lensProp('name'),
                  e.target.value,
                  path(['state', 'category'], this)
                )
              })} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
})


module.exports = CategoryForm
