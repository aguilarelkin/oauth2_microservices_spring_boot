"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAutenticated } from "../models/oauth/authenticated";
import { guardarTokenAuth } from "../models/oauth/setToken";
import generar, { deleteVerifier } from "../models/oauth/oauth";
import { loginToken } from "../models/services/loginApi";


function Authorized() {
    const [code, setCode] = useState<string>("");
    // const [token, setToken] = useState("");
    const [mensaje, setMensaje] = useState<string>("");
    const [sesion, setSesion] = useState<boolean | undefined>(false);
    const history = useRouter();

    useEffect(() => {
        if (isAutenticated()) {
            setSesion(isAutenticated());
            //Swal.fire('Login', `Estás autenticado`, 'info')
            history.push("/main");
        }

        setCode(window.location.href.split("code=")[1])
        if (code.length > 0 || window.location.href.split("code=")[1].length > 0) {
            login()
        }

    }, [])

    const login = async () => {
        try {
            let response = await loginToken(window.location.href.split("code=")[1]);
            let json;
            if (response?.status === 200) {
                json = await response.json()
                // setToken(json.access_token)
                guardarTokenAuth(json.access_token, json.refresh_token);
                deleteVerifier();
                history.push("/main");
            } else {
                setMensaje("Error")
                generar();
            }
        } catch (error) {
            setMensaje("Error")
            //generar();
        }
    }

    return <>
        <h1>CARGANDO </h1>
    </>
}
export default Authorized;