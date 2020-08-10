import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stockList: [],
    stockPortfolio: [],
    sortBy: 'None',
    filterBy: 'None'
  }

  updateFilterBy = filter => this.setState({ filterBy: filter })
  updateSortBy = sort => this.setState({ sortBy: sort })

  removeFromPortfolio = stock => {
    this.setState({
      stockPortfolio: this.state.stockPortfolio.filter( s => s !== stock  )
    })
  }

  addToPortfolio = stock => {
    if (!this.state.stockPortfolio.includes(stock)){
      this.setState({
        stockPortfolio: [...this.state.stockPortfolio, stock]
      })
    }
  }

  calculateDisplayStocks = () => {
    let displayStocks = [...this.state.stockList]

    return this.sortStocks( this.filterStocks( displayStocks ))
  }

  filterStocks = displayStocks => {
    let { filterBy } = this.state

    if (filterBy !== 'None') {
      displayStocks = displayStocks.filter( s => s.type === filterBy )
    }

    return displayStocks
  }

  sortStocks = displayStocks => {
    switch( this.state.sortBy ) {
      case 'Alphabetically':
        displayStocks.sort( ( a, b ) => a.name < b.name ? -1 : 1)
        break;
      case 'Price':
       displayStocks.sort( ( a, b) => a.price - b.price )
        break;
      default:
    }

    return displayStocks
  }

  render() {
    return (
      <div>
        <SearchBar
         sortBy={this.state.sortBy}
         updateSortBy={this.updateSortBy}
         filterBy={this.state.filterBy}
         updateFilterBy={this.updateFilterBy}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stockList={this.calculateDisplayStocks()}
                editPortfolio={this.addToPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stockPortfolio={this.state.stockPortfolio}
                editPortfolio={this.removeFromPortfolio}
              />

            </div>
          </div>
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then( resp => resp.json() )
      .then( stockList => this.setState({ stockList }))
  }

}

export default MainContainer