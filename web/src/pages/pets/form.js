const React = require('react')
const data = require('../../data')()

const PetForm = React.createClass({
  getInitialState() {
    return {
      colors: [
        
      ],
      pet: {
        name: '',
        color: {
          id: -1
        }
      }
    }
  },
  componentDidMount() {
    // load colors into state
    data.list('colors')
      .then(colors => this.setState({colors}))

    if (this.props.params.id) {
      data.get('pets', this.props.params.id)
        .then(pet => this.setState({pet}))
    }
  },
  handleChange(field) {
    return e => {
      const pet = {...this.state.pet}
      pet[field] = e.target.value
      this.setState({pet})
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    data.put('pets', this.state.pet.id, this.state.pet)
      .then(res => console.log(res))
  },
  handleSelect (e) {
    const pet = {...this.state.pet}
    const colors = [...this.state.colors]
    pet.color = colors.filter(color => {
      return color.id === parseInt(e.target.value,10)
    })

    this.setState({pet})
  },
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              value={this.state.pet.name}
              onChange={this.handleChange('name')}
             />
          </div>
          <div>
            <label htmlFor="">Colors</label>
            <select
              value={this.state.pet.color.id}
              onChange={this.handleSelect}
              >
              <option value="-1">Select</option>
              {this.state.colors.map(color =>
                <option key={color.id} value={color.id}>{color.name}</option>)}
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = PetForm
