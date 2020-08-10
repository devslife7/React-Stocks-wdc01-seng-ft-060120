import React from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = props => {

  function renderStocks() {
    return props.stockPortfolio.map( s =>
        <Stock
          key={s.id}
          stock={s}
          editPortfolio={props.editPortfolio}
        />
      )
  }

  return (
    <div>
      <h2>My Portfolio</h2>
        { renderStocks() }
    </div>
  )
}



export default PortfolioContainer;
