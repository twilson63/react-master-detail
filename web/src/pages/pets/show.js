const React = require('react')
const {Link} = require('react-router')
const data = require('../../data')()
const Procedures = require('../procedures')

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
        <header>
          <div style={{float: 'left'}}>
            <img src="http://placehold.it/30" />
          </div>
          <h1>{this.state.pet.name}</h1>
        </header>
        <main>
          {/* this.props.location.query.pet_id */}
          {/* this.props.location.query.name */}

          <Link to={`/procedures/new?pet_id=${this.state.pet.id}&name=${this.state.pet.name}`}>New Procedure</Link>

          <h3>Procedures</h3>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Date</td>
                <td>Category</td>
              </tr>
            </thead>
            <tbody>
              {this.state.procedures.map(record)}
            </tbody>

          </table>
        </main>

      </div>
    )
  }
})

module.exports = Pet
