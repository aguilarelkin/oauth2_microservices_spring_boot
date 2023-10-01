import { credentialsLogin, paramLogin } from "./authorization/authorization";
import { enviroments } from "./enviroments";

const API_LOGIN = enviroments.token_url;

export const loginToken = async (code: string): Promise<Response | undefined> => {
    try {
        let response: Response = await fetch(API_LOGIN, {
            method: "POST",
            body: paramLogin(code),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + credentialsLogin()
            }
        })

        return response;

    } catch (error) {

    }
}