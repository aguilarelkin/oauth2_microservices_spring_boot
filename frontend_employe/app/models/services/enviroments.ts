export const enviroments = {
    authorize_uri: 'http://localhost:9100/oauth2/authorize?',
    client_id: 'oidc-client',
    redirect_uri: 'http://127.0.0.1:3000/authorized',
    scope: 'openid',
    response_type: 'code',
    response_mode: 'form_post',
    code_challenge_method: 'S256',
    //code_challenge: '-uBkYIs9olG_Xco5RuU2Ck9O0t80oamexefunDAehgk',
    //code_verifier: 'Z2nZ942pGwFYQPbGzUNbvxsJkKdWZYjV73VnFXbstnG',
    token_url: 'http://localhost:9100/oauth2/token',
    grant_type: 'authorization_code',
    resource_url: 'http://localhost:8080/resource',
    logout_url: 'http://localhost:9100/logout',
    secret_pkce: 'secret',
    login_url: 'http://localhost:9100/login',
}
