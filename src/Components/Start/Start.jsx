import React from 'react'
import './Start.css'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
        <div >
            <h2 className='text-center fs-1 mt-3'>TIC TAC TOE</h2>
            <img src="https://c.shld.net/rpx/i/s/i/spin/-122/prod_2270797212??hei=64&wid=64&qlt=50" alt="" height={'300px'} width={'300px'} style={{marginLeft:'540px', marginTop:'50px'}} />
            <div className='' style={{marginLeft:'610px', marginTop:'30px'}}>
                <Link to={'/game'}>
                <button className='btn btn-success fs-3 text-center px-5'>Start</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Start