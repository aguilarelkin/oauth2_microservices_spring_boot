"use client"
import { useEffect } from "react";
import { logout } from "../models/close/logout";


function Logout() {

    useEffect(
        () => {
            logout();
        }, []
    );

    return (<> </>);
}

export default Logout;