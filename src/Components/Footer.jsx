import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container d-flex flex-column " style={{ minHeight: "50vh" }}>
  <footer className="py-3 mt-auto">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item "><a href="#" className="nav-link px-2 text-white ">created</a></li>
      <li className="nav-item "><a href="#" className="nav-link px-2 text-white">by</a></li>
      <li className="nav-item "><a href="#" className="nav-link px-2 text-white ">Ashmita</a></li>
      <li className="nav-item "><a href="#" className="nav-link px-2 text-white">singh</a></li>
    </ul>
    <p className="text-center text-white">© 2024 Company, Inc</p>
  </footer>
</div>
      
    </div>
  )
}

export default Footer
