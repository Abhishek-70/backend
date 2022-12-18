// 1. Components are JavaScript Functions
// 2. Function first letter should start with upper case
// 3. Function should return a single JSX element
// 4. Function should be exported

import React from 'react'

const Home = () => {
  return (
    <div>
        
    <h1 style={ {color:'red',backgroundColor: 'yellow',border: '1px solid red'} }>Home Page</h1>
    <button className='btn btn-primary'>Using Bootstrap</button>
     <input />
    </div>
  )
}

export default Home;