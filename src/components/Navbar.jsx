const Navbar = () => {
  return(
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="navbar-brand mb-0 h1"> Formularios</h1>
          <div className="d-flex gap-3"> 
            <button className="btn btn-link text-white text-decoration-none">Home</button>
            <button className="btn btn-link text-white text-decoration-none"> Login</button>
            <button className="btn btn-link text-white text-decoration-none">Register</button>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar