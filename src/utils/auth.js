import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
    domain: 'andre-barata.eu.auth0.com',
    clientID: 'OhaS55WZc1Zxuc4Zb9N323xEbltiPV3y',
    redirectUri: 'http://localhost:8080/callback',
    audience: 'https://andre-barata.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
});

let tokens = {};
let userProfile = {};

const login = () => {
    webAuth.authorize();
};

const logout = () => {
    tokens = {};
};

const handleAuth = (callback) => {
    webAuth.parseHash((err, authResult) => {
        if(
            authResult && 
            authResult.accessToken && 
            authResult.idToken
        ) {
            tokens.accessToken = authResult.accessToken;
            tokens.idToken = authResult.idToken;
            tokens.expiry = (new Date()).getTime() + (authResult.expiresIn * 1000)
            userProfile = authResult.idTokenPayload;
            callback();
        } else {
            console.log(err);
        }
    })
};

const isLoggedIn = () => {
    return tokens.accessToken && (new Date()).getTime() < tokens.expiry;
};

const getUserProfile = () => {
    return userProfile;
}

export {
    login,
    logout,
    handleAuth,
    isLoggedIn,
    getUserProfile
}