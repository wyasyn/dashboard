import React from 'react'


const Stats = (props) => {
  return (
    <div className='stats'>
        <div className="pageV">
          <p>{props.title}</p>
          <img src={props.img} alt="social" />
        </div>
        <div className="values">
          <h2>{props.stat}</h2>
          <small>
            <img src={props.arrow} alt="arrow" />
            <span>{props.percent}%</span>
          </small>
        </div>
    </div>
  )
}

export default Stats