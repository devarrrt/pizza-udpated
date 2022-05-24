import React from 'react'

import PizzaBlock from '../components/PizzaBlock'

type Props = {}

const Home = (props: Props) => {
  return (
      <div className="container">
          <div className="content__top">
              <p>Categories</p>
              <p>Sort</p>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          {/* {status === 'error' ? ( */}
              {/* <div className="content__error-info">
                  <h2>Произошла ошибка 😕</h2>
                  <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
              </div>
          ) : ( */}
              <div className="content__items">
              <PizzaBlock/>
             </div>
          {/* )} */}
          пагинация
      </div>
  )
}

export default Home