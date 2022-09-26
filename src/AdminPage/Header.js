import React from 'react'

const Header = () => {
    let headerStyle={
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    }
  return (
    <div className=" text-center" style={headerStyle}>
        <h1><b>Invertory Management</b></h1>
      <h4>Deccan Education Society's</h4>
      <h3>Fergusson College</h3>
      <h4>(Autonoumous)</h4>

    </div>
  )
}

export default Header
