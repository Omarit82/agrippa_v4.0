import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";
import './style.css';


export const Register = () => {
    
    const { handleRegister,error } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    return (
        <main className="d-flex justify-content-start align-items-center flex-column">
            <h2 className="text-center">Registro</h2>
            <form  onSubmit={handleSubmit(handleRegister)}  className="d-flex flex-column w-50 align-items-center m-5" >
                <label htmlFor="email" className="text-center">Email</label>
                <input {...register("email")} name="email" placeholder="..Ingrese su email.." className="text-center" />
                <label htmlFor="user" className="text-center">Nombre Usuario</label>
                <input {...register("user")} name="user" placeholder="..Nombre de Usuario.." className="text-center" />
                <label htmlFor="password" className="text-center"> Password</label>
                <input {...register("password")} name="password" type="password" placeholder="..Ingrese su password.." className="text-center"/>
                <button type="submit" className="btn btn-info mt-3">Registrar</button>
                {(error.length !== '') && <p className="text-center">{error}</p>}
            </form>
        </main>
    )
}