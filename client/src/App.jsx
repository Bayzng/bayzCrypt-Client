import { Navbar, Welcome, Footer, Services, Transactions } from "./components"
import Home from "./pages/Home";
import HomePage from "./components/HomePage";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="/Wallet" element={ <Home/> }/>
     </Routes>
    </BrowserRouter>
  )
}

export default App




// <div className='min-h-screen'>
//       <div className="gradient-bg-welcome">
//         <Navbar/>
//         <Welcome/>
//       </div>
//       <Services/>
//       <Transactions/>
//       <Footer/>
//     </div>