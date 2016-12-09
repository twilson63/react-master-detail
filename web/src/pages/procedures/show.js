const React = require('react')
const data = require('../../data')()

const {set, lensProp} = require('ramda')

const PetCard = require('../pets/card')

const Procedure = React.createClass({
  getInitialState() {
    return {
      procedure: {
        name: 'Foo'
      }
    }
  },
  componentDidMount() {
    data.get('procedures', this.props.params.id)
      .then(procedure => data.get('pets', procedure.parent_id)
        .then(pet => set(lensProp('pet'), pet, procedure))
      )
      .then(procedure => this.setState({procedure}))

  },
  render() {
    return (
      <div>
        <h1>Procedure</h1>
        <h3>{this.state.procedure.name}</h3>
        {this.state.procedure.pet ? <PetCard pet={this.state.procedure.pet} /> : null }
      </div>
    )
  }
})

module.exports = Procedure
