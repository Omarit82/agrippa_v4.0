import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "@firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const UserContext = createContext();
/** TRAIGO DEL SESSION STORAGE EL USUARIO - SI ESTA LOGUEADO **/
const userInicial = (JSON.parse(sessionStorage.getItem('user')) || {});


export const UserProvider = ({ children }) => {
    const [error, setError] = useState('');
    const [ user, setUser ] = useState(userInicial);  
    const navigate = useNavigate();

    /** REGISTRO DE UN NUEVO USUARIO **/
    const handleRegister = async (data) =>{
        try {
            const registro = await createUserWithEmailAndPassword(auth,data.email, data.password);
            const usuario = registro.user;
            await updateProfile(usuario, {
                displayName: data.user,
            });
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Registro Exitoso"
              })
              .then(()=>{
                navigate('/');
              });
        } catch (error) {
            setError("Error al realizar el registro: "+error);
        }
    }
    /**LOGIN DE USUARIO AL SESSION**/
    useEffect(() =>{
        sessionStorage.setItem('user', JSON.stringify(user));
    },[user])

    /** LOGIN DE USUARIO **/
    const handleLogin = async(data) => {
        try {
            const user = await signInWithEmailAndPassword(auth, data.email, data.password);
            setUser(user);
        } catch (error) {
            setError("Error en el incio de sesion: "+error);
        }
    }
    const handleLogout = async() => {
        try {
            await signOut(auth);
            setUser({});
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    }

    const valores = {
        handleLogin,
        handleRegister,
        handleLogout,
        error,
        user
    }

    return(
        <UserContext.Provider value={ valores } >
            {children}
        </UserContext.Provider>
    )
}