const React = require('react')
const {BrowserRouter, Match} = require('react-router')

const Home = require('./pages/home')
const PetForm = require('./pages/pets/form')
const Pet = require('./pages/pets/show')
const Categories = require('./pages/categories')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/pets/:id/show" component={Pet} />
          <Match pattern="/categories" component={Categories} />
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
