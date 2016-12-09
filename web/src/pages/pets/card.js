const React = require('react')

const PetCard = React.createClass({
  render() {
    return (
      <header>
        <div style={{float: 'left'}}>
          <img src="http://placehold.it/30" />
        </div>
        <h1>{this.props.pet.name}</h1>
      </header>
    )
  }
})

module.exports = PetCard
