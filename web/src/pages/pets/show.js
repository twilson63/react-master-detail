const React = require('react')
const {Link} = require('react-router')
const data = require('../../data')()
const Procedures = require('../procedures')
const PetCard = require('./card')

const Pet = React.createClass({
  getInitialState() {
    return {
      procedures: [],
      pet: {}
    }
  },
  componentDidMount() {
    data.get('pets', this.props.params.id)
      .then(pet => this.setState({pet}))

    data.list('procedures')
      .then(procedures =>
        procedures.filter(procedure =>
          procedure.parent_id === this.state.pet.id))
      .then(procedures => this.setState({procedures}))
  },
  render() {
    const record = procedure =>
      <tr key={procedure.id}>
        <td>{procedure.name}</td>
        <td>{procedure.date}</td>
        <td>{procedure.category.name}</td>
      </tr>

    return (
      <div>
        <PetCard pet={this.state.pet} />
        <main>
          {this.state.pet.id ? <Procedures petID={this.state.pet.id} /> : null}
        </main>
      </div>
    )
  }
})

module.exports = Pet
