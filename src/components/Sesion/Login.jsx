import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";


export const Login = () => {
    const { handleLogin,error } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    return(
        <main className="d-flex justify-content-start align-items-center flex-column">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)} className="d-flex flex-column w-50 align-items-center m-5">
                <label htmlFor="email">E-mail</label>
                <input {...register("email")} name="email" placeholder="..e-mail.." className="text-center" />
                <label htmlFor="pass">Password</label>
                <input {...register("password")} type="password" name="password" placeholder="..password.." className="text-center"/>
                <button type="submit" className="btn btn-info mt-3">Login</button>
                {(error.length !== '') && <p className="text-center">{error}</p>}
            </form>
            <p>¿No está registrado?</p>
            <Link to={'/Registro'} >Registrarse</Link>
        </main>
    )
}