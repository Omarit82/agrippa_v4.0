import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home';
import { UserProvider } from './context/userContext';
import { Register } from './components/Sesion/Register';
import { New } from './components/New/New';

function App() {

  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/Registro' element={ <Register/>} />
          <Route path='/New' element={ <New /> } />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
