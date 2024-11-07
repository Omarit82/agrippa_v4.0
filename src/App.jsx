import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home';
import { UserProvider } from './context/userContext';
import { Register } from './components/Sesion/Register';
import { New } from './components/New/New';
import { Assign } from './components/Assign/Assign';
import { PatientProvider } from './context/patientContext';

function App() {

  return (
    <>
      <UserProvider>
      <PatientProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/Registro' element={ <Register/>} />
          <Route path='/New' element={ <New /> } />
          <Route path='/AssignTurn' element={ <Assign />} />
        </Routes>
        <Footer />
      </PatientProvider>
      </UserProvider>
    </>
  )
}

export default App
