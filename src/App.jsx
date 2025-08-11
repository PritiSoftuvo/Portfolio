import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'

// Import toastify styles and container
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        {/* Toast notifications container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  )
}

export default App

