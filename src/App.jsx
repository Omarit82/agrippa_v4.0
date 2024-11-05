import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home';
import { UserProvider } from './context/UserContext';
import { Register } from './components/Sesion/Register';

function App() {

  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/Registro' element={ <Register/>} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
