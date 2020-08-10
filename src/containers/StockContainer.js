import React from 'react';
import Stock from '../components/Stock'

const StockContainer = props => {

  function renderStocks() {
    return props.stockList.map( s =>
        <Stock
          key={s.id}
          stock={s}
          editPortfolio={props.editPortfolio} />
      )
  }

  return (
    <div>
      <h2>Stocks</h2>
      {
        renderStocks()
      }
    </div>
  )
}

export default StockContainer;
