import React from 'react'

const Navbar = () => {

  const btns = document.querySelector(".btns");

  function toggleFunction(){
    btns.classList.toggle("active");
    document.body.classList.toggle("dark-theme");
  }


  return (
    <nav className='Navbar'>
      <div className="title">
        <h1>Social media Dashboard</h1>
        <h3>Total Followers: 23,004</h3>
      </div>
      <div className="toggle">
        <h3>Dark Mode</h3>
        <div className="btns" onClick={toggleFunction}>
          <div className="btn"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar