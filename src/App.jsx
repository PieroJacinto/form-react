import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Register from "./components/Register"

const App = () => {

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar/>
        <main className="flex-fill">
          <Register/>          
        </main>
        <Footer/>
      </div>      
    </>
  )
}


export default App