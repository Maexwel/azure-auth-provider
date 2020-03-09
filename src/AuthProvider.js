import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// The auth provider is the object used to authenticate user to Azure AD.
// This object is also used to fetch access token
export const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority: `https://login.microsoftonline.com/${"<TENANT_ID>"}`,
            clientId: "<APP_ID>",
            navigateToLoginRequestUrl: true, // Always navigate to login request url (prevent #id_token in Url that break navigation)
        },
        cache: {
            cacheLocation: 'sessionStorage', // Session storage is more safe an prevent a lot of bugs
        },
    },
    {
        scopes: ['https://eoneprayon.sharepoint.com/.default'], // Provide here your scopes based on the app registration in Azure

    },
    {
        loginType: LoginType.Redirect, // Redirect is more safe an prevent frome some bug and looping in app authentication
        tokenRefreshUri: `${window.location.origin}/auth.html`, // Always provide a blank "auth.html" file in public folder to handle token request.
    },
);