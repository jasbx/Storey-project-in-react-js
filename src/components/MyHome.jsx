import React from 'react'
import Home from './Home'
import Storey from './Storey'
import AddStorey from './AddStorey'
import AddBlog from './AddBlog'

const MyHome = () => {
  return (
    <>
    
      <Home></Home>
      <AddStorey></AddStorey>
      <Storey/>
      <AddBlog/>
    </>
  )
}

export default MyHome
