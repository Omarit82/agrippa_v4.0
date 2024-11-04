import { Header } from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home';
import { UserProvider } from './context/userContext';

function App() {

  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/>} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
