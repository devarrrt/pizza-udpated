import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const PizzaItem = (props: Props) => {
  return (
      <div className="container">
          <img src='' />
          <h2>title</h2>
          <h4> 1042 ₽</h4>
          <Link to="/">
              <button className="button button--outline button--add">
                  <span>Назад</span>
              </button>
          </Link>
      </div>
  )
}

export default PizzaItem