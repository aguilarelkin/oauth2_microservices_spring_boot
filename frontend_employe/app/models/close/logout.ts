import generar from "../oauth/oauth";
import { setToken } from "../oauth/token";
import { enviroments } from "../services/enviroments";

export const logout = async () => {
    setToken();
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('page');
    //window.location.href = enviroments.login_url;

    generar();

    // window.location.href = enviroments.login_url;
    //Swal.fire("Login", 'Sessión finalizada', 'warning');
}
export const experidedTokenLogin = async() => {
    setToken();
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('page');
    //window.location.href = enviroments.login_url;
    //window.location.href= "http://localhost:9001/logout";
    generar();

    //let response = await logoutToken();
    //console.log(response);
    //if (response?.status == 200) {
        //window.location.href = response.url;
    //}

    // window.location.href = enviroments.login_url;
    //Swal.fire("Login", 'Sessión finalizada', 'warning');
}
export const logoutAuth = () => {

    window.location.href = enviroments.logout_url;

}