import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home';
import { UserProvider } from './context/userContext';
import { Register } from './components/Sesion/Register';
import { New } from './components/New/New';
import { Assign } from './components/Assign/Assign';
import { Turnos } from './components/Turnos/Turnos';
import { FilterTurnosProvider } from './context/filterTurnosContext';

function App() {

  return (
    <>
      <UserProvider>
      <FilterTurnosProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/Registro' element={ <Register/>} />
          <Route path='/New' element={ <New /> } />
          <Route path='/Turnos' element={ <Turnos />} />
          <Route path='/Assign' element={ <Assign />} />
        </Routes>
        <Footer />
      </FilterTurnosProvider>
      </UserProvider>
    </>
  )
}

export default App
