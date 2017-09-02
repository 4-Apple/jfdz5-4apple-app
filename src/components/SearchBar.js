import React from 'react'

import {withRouter} from 'react-router-dom'

import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import logo from "../img/logo.svg"
import magnifier from "../img/magnifier.png"
import '../components/SearchBar.css'
import Link from "react-router-dom/es/Link"
import {connect} from 'react-redux'
import {search} from '../state/searching'

class SearchBar extends React.Component {

  state = {
    searchedName: '',
  }

  handleChange = (event) => this.setState({
    searchedName: event.target.value
  })


  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/results/list')
    this.props.addSearchedItem(this.state.searchedName)
    this.setState({
      searchedName: ''
    })
  }

  render() {
    return (
      <div>
        <Navbar>
          <div className="navbar--contaiter">
            <Navbar.Header>
              <Navbar.Brand className="logo">
                <Link to={`/`}><img src={logo} alt="logo"/></Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                <form className="search--form" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormControl type="text"
                                 value={this.state.searchedName}
                                 onChange={this.handleChange}
                                 required
                                 placeholder="Znajdź produkt"/>
                  </FormGroup>
                  {' '}

                  <Button className="search-button" type="submit">
                    <img src={magnifier}
                         alt="search"
                         height="35"/></Button>
                </form>
              </Navbar.Form>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(
  connect(
    state => ({
      searchedItems: state.searching.searchedItems
    }),
    dispatch => ({
      addSearchedItem: searchedItem => dispatch(search(searchedItem))
    })
  )(SearchBar)
)