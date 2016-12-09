const React = require('react')
const { Link } = require('react-router')
const data = require('../../data')()
const {filter, propEq} = require('ramda')

const Procedures = React.createClass({
  getInitialState() {
    return {
      procedures: []
    }
  },
  componentDidMount() {
    data.list('procedures')
      .then(filter(propEq('parent_id', this.props.petID)))
      .then(procedures => this.setState({procedures}))
  },
  render() {
    return (
      <div>
        <h1>Procedures</h1>
        <Link to={`/procedures/new?pet_id=${this.props.petID}`}>New Procedure</Link>
        <ul>
          {this.state.procedures.map(procedure => <li>{procedure.name}</li>)}
        </ul>
      </div>
    )
  }
})

module.exports = Procedures
