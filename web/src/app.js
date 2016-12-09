const React = require('react')
const {BrowserRouter, Match} = require('react-router')

const data = require('./data')()

const Home = require('./pages/home')
const PetForm = require('./pages/pets/form')
const Pet = require('./pages/pets/show')
const Categories = require('./pages/categories')
const CategoryForm = require('./pages/categories/form')
const Procedure = require('./pages/procedures/show')
const Procedures = require('./pages/procedures')

const { pathOr, path } = require('ramda')
const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/pets/:id/show" component={Pet} />
          <Match exactly pattern="/categories" component={Categories} />
          <Match pattern="/categories/new" component={CategoryForm} />

          <Match exactly pattern="/procedures" component={Procedures} />
          <Match pattern="/procedures/:id/show" component={Procedure} />

        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
