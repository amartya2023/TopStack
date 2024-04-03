import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./layouts/Header"
import Home from "./pages/Home"
import Footer from "./layouts/Footer"
import TakeReview from "./pages/TakeReview"
import Login from "./pages/admin/Login"

function App() {

  const location = useLocation();

  return (
    <>

    {
      location.pathname.split('/')[1] !== 'admin' && (
        <Header />
      )
    }

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add-review/:agentID" element={<TakeReview />} />
        <Route path="/admin/login" element={<Login />} />

        {/* <Route>

        </Route> */}
      </Routes>
      
      {
        location.pathname.split('/')[1] !== 'admin' && (
          <Footer/>
        )
      }
    </>
  )
}

export default App