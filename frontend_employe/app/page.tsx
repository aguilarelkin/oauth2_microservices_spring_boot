'use client'
import { useRouter } from "next/navigation";
import { isAutenticated } from "./models/oauth/authenticated";
import generar from "./models/oauth/oauth";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(
    () => {
      if (isAutenticated()) {
        //setSesion(isAutenticated());
        // Swal.fire('Login', `${getUsuario().username} ya estás autenticado`, 'info')
        router.push('/main');
      } else {
        generar();
      }
    }, []
  );

  return (<></>);

}
